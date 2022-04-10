import React from 'react';

export default function Edit(props) {
  return (
    <form className="edit-form" onSubmit={props.onSubmit}>
      <div>
        <label>
          First Name:
          <input
            name="firstName"
            value={props.firstName}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            name="lastName"
            value={props.lastName}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            name="email"
            value={props.email}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            name="phone"
            value={props.phone}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
          <label>
              Department:
              <input 
              name="department"
              value={props.department}
              onChange={props.handleChange}
              />
          </label>
      </div>
      <button>Save Changes</button>
    </form>
  );
}
