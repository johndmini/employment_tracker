import React from 'react';

export default function Main(props) {
  const { employees } = props;

  const employeeList = employees.map((employee) => (
    <div id='main' key={employee._id}>
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

  return <div>{employeeList}</div>;
}
