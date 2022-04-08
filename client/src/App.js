import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import NavMobile from './components/navmobile';
import './Styles/employeelist.css';
import axios from 'axios';

export default function App() {
  const [employees, setEmployees] = useState([]);
  console.log(employees);

  const getAllEmployees = () => {
    axios
      .get('/employees')
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  };

  const addEmployee = (newEmployee) => {
    axios
      .post('/employees', newEmployee)
      .then((res) => setEmployees((prevState) => [...prevState, res.data]))
      .catch((err) => console.log(err));
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`/employees/${id}`)
      .then((res) =>
        setEmployees((prevState) =>
          prevState.filter((employee) => employee._id !== id)
        )
      )
      .catch((err) => console.log(err));
  };

  const updateEmployee = (id, newUpdates) => {
    axios.put(`/employees/${id}`, newUpdates).then((res) => {
      setEmployees((prevState) =>
        prevState.map((employee) => (employee._id !== id ? employee : res.data))
      ).catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const employeeList = employees.map((employee) => (
    <div key={employee._id}>
      <div className="employee-container">
        <p>
          <strong>Full Name: </strong>
          {employee.firstName} {employee.lastName}
        </p>
        <p>
          <strong>ID:</strong> {employee._id}
        </p>
        <p>
          <strong>Email: </strong>
          {employee.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {employee.phone}
        </p>
        <button>Employee Page</button>
        <button>Print ID Badge</button>
      </div>
    </div>
  ));

  return (
    <div>
      <Nav />
      <NavMobile />
      {employeeList}
    </div>
  );
}
