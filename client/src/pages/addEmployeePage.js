import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/addForm.css';

export default function NewEmployeePage(props) {
  const { setEmployees } = props;
  const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [newEmployee, setNewEmployee] = useState(initialInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  const addEmployee = () => {
    axios
      .post('https://employment-tracker.herokuapp.com/employees', newEmployee)
      .then((res) => setEmployees((prevState) => [...prevState, res.data]))
      .catch((err) => console.log(err));
    setNewEmployee(initialInput);
  };

  const navigate = useNavigate();

  return (
    <div className="addForm-container">
      <div>
        <form onSubmit={() => addEmployee()} className="addForm">
          <label className="input-label">
            First Name:
            <input
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="input-label">
            Last Name:
            <input
              name="lastName"
              value={newEmployee.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="input-label">
            E-mail:
            <input
              name="email"
              value={newEmployee.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="input-label">
            Phone Number:
            <input
              name="phone"
              value={newEmployee.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Initial Submit</button>
        </form>
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Return to Master Tracker
      </button>
    </div>
  );
}
