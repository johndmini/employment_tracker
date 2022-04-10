import React from 'react';

export default function Functions() {
  return (
    <div>
      <h4>Filter By:</h4>
      <div>
        <select>
          <option>Department</option>
          <option>Last Name</option>
          <option>Phone Number</option>
        </select>
      </div>
      <div>
        <input />
        <button>Search</button>
      </div>
    </div>
  );
}
