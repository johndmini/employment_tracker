import React, { useState } from 'react';
import Edit from '../components/editForm';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TargetEmployee(props) {
  const { setEmployees } = props;
  const { state } = useLocation();
  const [editToggle, setEditToggle] = useState(false);
  const prevInfo = {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    phone: state.phone,
  };

  const [newInfo, setNewInfo] = useState(prevInfo);
  console.log(state);
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditToggle((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateEmployee = (id, newUpdates) => {
    axios.put(`/employees/${id}`, newUpdates).then((res) => {
      setEmployees((prevState) =>
        prevState.map((employee) => (employee._id !== id ? employee : res.data))
      ).catch((err) => console.log(err.response));
    });
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

  return (
    <div>
      <div>
        <p>
          <strong>First Name:</strong> {newInfo.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {newInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {newInfo.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {newInfo.phone}
        </p>
        <button onClick={handleEdit}>
          {!editToggle ? 'Edit Info' : 'Close'}
        </button>
        <button disabled={editToggle === true}>Print Badge</button>
        <button
          disabled={editToggle === true}
          onClick={() => {
            deleteEmployee(state._id);
            navigate('/');
            alert('Employee Terminated');
          }}
        >
          Terminate Employee
        </button>
      </div>
      {editToggle && (
        <div>
          <Edit
            firstName={newInfo.firstName}
            lastName={newInfo.lastName}
            email={newInfo.email}
            phone={newInfo.phone}
            handleChange={handleChange}
            onSubmit={() => {
              updateEmployee(state._id, newInfo);
              handleEdit();
            }}
          />
        </div>
      )}
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
