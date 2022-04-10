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

  const updateEmployee = async (id, newUpdates) => {
    try {
      const response = await axios.put(
        `/employees/targetemployee/${id}`,
        newUpdates
      );
      setEmployees((prevState) =>
        prevState.map((employee) =>
          employee._id !== response.data._id ? employee : response.data
        )
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`/employees/targetemployee/${id}`);
      setEmployees((prevState) =>
        prevState.filter((employee) => employee._id !== response.data._id)
      );
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <div className="employee-container">
      <div className="employee-snapshot">
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
        <div className="edit-form">
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
