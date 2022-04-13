import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/nav.css';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-title">
        <img src="./images/sample-company.png" alt="" />
        <h5>Employment Management Tracker</h5>
      </div>
      <div className="nav">
        <button onClick={() => navigate('/')}>Master Tracker</button>
        <button onClick={() => navigate('/newemployee')}>
          Add New Employee
        </button>
      </div>
    </div>
  );
}
