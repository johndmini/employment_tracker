import React from 'react';
import '../Styles/functionsBar.css';

export default function Functions() {
  return (
    <div className="functionsBar-container">
      <div className="functions-category">
        <h5>Filter By:</h5>
      </div>
      <div className="functions-select">
        <select>
          <option>Department</option>
          <option>Last Name</option>
          <option>Phone Number</option>
        </select>
      </div>
      <div className="functions-search">
        <input />
        <button>Search</button>
      </div>
    </div>
  );
}
