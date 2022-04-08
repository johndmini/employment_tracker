import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import NavMobile from './components/navmobile';
import Functions from './components/functionsBar';
import Main from './pages/main';
import './Styles/employeelist.css';
import axios from 'axios';

export default function App() {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div>
      <Nav />
      <NavMobile />
      <Functions />
      <Main employees={employees} />
    </div>
  );
}
