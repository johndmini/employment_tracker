import React, { useState } from 'react';
import Edit from '../components/editForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function TargetEmployee(props) {
  const { employeeId } = useParams();
  const { employees, setEmployees } = props;
  const [editToggle, setEditToggle] = useState(false);
  const target = employees.find((employee) => employee._id === employeeId);

  const prevInfo = {
    firstName: target.firstName,
    lastName: target.lastName,
    email: target.email,
    phone: target.phone,
  };
  const [newInfo, setNewInfo] = useState(prevInfo);

  const navigate = useNavigate();

  const handleEdit = () => {
    setEditToggle((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateEmployee = (id, newUpdates) => {
    axios
      .put(`/employees/targetemployee/${id}`, newUpdates)
      .then((res) => {
        setEmployees((prevState) =>
          prevState.map((employee) =>
            employee._id !== id ? employee : res.data
          )
        );
      })
      .catch((err) => console.log(err.response));
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`/employees/targetemployee/${id}`)
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
          <strong>First Name:</strong> {prevInfo.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {prevInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {prevInfo.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {prevInfo.phone}
        </p>
        <button onClick={handleEdit}>
          {!editToggle ? 'Edit Info' : 'Close'}
        </button>
        <button disabled={editToggle === true}>Print Badge</button>
        <button
          disabled={editToggle === true}
          onClick={() => {
            deleteEmployee(target._id);
            navigate('/');
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
              updateEmployee(target._id, newInfo);
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
