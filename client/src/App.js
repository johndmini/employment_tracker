import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import NavMobile from './components/navmobile';
import Functions from './components/functionsBar';
import Main from './pages/main';
import NewEmployeePage from './pages/addEmployeePage';
import TargetEmployee from './pages/employeePage';
import Badge from './pages/printBadge';
import axios from 'axios';
import './Styles/employeelist.css';

export default function App() {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = () => {
    axios
      .get('/employees')
      .then((res) => setEmployees(res.data))
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

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <NavMobile />
      <Functions />
      <Routes>
        <Route path="/" element={<Main employees={employees} />} />
        <Route
          path="/newemployee"
          element={<NewEmployeePage setEmployees={setEmployees} />}
        />
        <Route
          path="/targetemployee"
          element={<TargetEmployee employees={employees} setEmployees={setEmployees} />}
        />
        <Route path="/printbadge" element={<Badge />} />
      </Routes>
    </BrowserRouter>
  );
}
