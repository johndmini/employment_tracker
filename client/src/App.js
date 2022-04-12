import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import NavMobile from './components/navmobile';
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
      .get('https://employment-tracker.herokuapp.com/employees')
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <NavMobile />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              employees={employees}
              setEmployees={setEmployees}
              getAllEmployees={getAllEmployees}
            />
          }
        />
        <Route
          path="/newemployee"
          element={<NewEmployeePage setEmployees={setEmployees} />}
        />
        <Route
          path="/targetemployee/:employeeId"
          element={
            <TargetEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route path="/printbadge" element={<Badge employees={employees} />} />
      </Routes>
    </BrowserRouter>
  );
}
