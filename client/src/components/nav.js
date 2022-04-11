import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/nav.css';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav">
        <button onClick={() => navigate('https://johnd-employment-tracker.herokuapp.com/')}>Master Tracker</button>
        <button onClick={() => navigate('https://johnd-employment-tracker.herokuapp.com/newemployee')}>Add New Employee</button>
      </div>
    </div>
  );
}
