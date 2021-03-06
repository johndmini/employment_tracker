import React, { useState, useEffect } from 'react';
import Functions from '../components/functionsBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/employeelist.css';

export default function Main(props) {
  const [filtered, setFiltered] = useState('all');
  const { employees, setEmployees, getAllEmployees } = props;
  const [searchField, setSearchField] = useState('');
  
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const navigate = useNavigate();

  const reset = () => {
    if (filtered === 'all') {
      getAllEmployees();
    }
  };

  useEffect(() => {
    reset();
  },[filtered])

  const handleFilter = (e) => {
    setFiltered(e.target.value);
  };

  const searchFilter = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://employment-tracker.herokuapp.com/employees/search/${filtered}?${filtered}=${searchField}`
      )
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
    setSearchField('');
  };

  const employeeList = employees.map((employee) => (
    <div className="employee-container" key={employee._id}>
      {(!employee.address || !employee.department) && (
        <h5>
          Additional Info Required:
          <p>{!employee.address && '* Mailing Address'}</p>
          <p>{!employee.department && '* Department'}</p>
          <p>{(!employee.emergencyContactPhone || !employee.emergencyContactAddress || !employee.emergencyContactFirstName || !employee.emergencyContactLastName || !employee.emergencyContactRelationship) && '* Emergency Contact'}</p>
        </h5>
      )}
      <p>
        <strong>Full Name: </strong>
        {employee.firstName} {employee.lastName}
      </p>
      <p>
        <strong>ID:</strong> {employee._id.toUpperCase()}
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
          navigate('/printbadge', { state:  employee });
        }}
      >
        Print ID Badge
      </button>
    </div>
  ));

  return (
    <>
      <Functions
        handleFilter={handleFilter}
        searchFilter={searchFilter}
        handleChange={handleChange}
        filtered={filtered}
        searchField={searchField}
      />
      <div className="employeelist">{employeeList}</div>
    </>
  );
}
