import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main(props) {
    const { employees } = props;
    
    const navigate = useNavigate();
    
    const targetEmployee = (employee) => {
        const targetEmployee = employee
        navigate('/targetemployee', { state : targetEmployee });
    }

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
        <button
          onClick={() => {
            targetEmployee(employee);
            ;
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
    </div>
  ));

  return <div>{employeeList}</div>;
}
