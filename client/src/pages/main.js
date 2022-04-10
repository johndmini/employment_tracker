import React from 'react';
import Functions from '../components/functionsBar';
import { useNavigate } from 'react-router-dom';

export default function Main(props) {
  const { employees } = props;

  const navigate = useNavigate();

  const employeeList = employees.map((employee) => (
    <div className="employee-container" key={employee._id}>
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
      <p>
        <strong>Department: </strong>
        {employee.department}
      </p>
      <button
        onClick={() => {
          navigate(`/targetemployee/${employee._id}`);
        }}
      >
        Employee Page
      </button>
      <button
        onClick={() => {
          navigate('/printbadge');
        }}
      >
        Print ID Badge
      </button>
    </div>
  ));

  return (
    <>
      <Functions />
      <div className="employeelist">{employeeList}</div>
    </>
  );
}
