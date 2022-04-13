import React from 'react';
import '../Styles/functionsBar.css';

export default function Functions(props) {
  return (
    <div className="functionsBar-container">
      <div className="functions-category">
        <h5>Filter By:</h5>
      </div>
      <div className="functions-select" onChange={props.handleFilter}>
        <select>
          <option value="all">--Select--</option>
          <option value="lastname">Last Name</option>
          <option value="department">Department</option>
        </select>
      </div>
      <form className="functions-search">
        <input value={props.searchField} onChange={props.handleChange} />
        <button onClick={props.searchFilter}>Search</button>
      </form>
    </div>
  );
}
