import React from 'react';
import '../Styles/editForm.css';

export default function Edit(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="additional-info">
        <div>
          <label>
            First Name:
            <input
              name="firstName"
              required
              pattern="[a-zA-Z\s]+"
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
              required
              pattern="[a-zA-Z\s]+"
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
              required
              placeholder="sample@email.com"
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
              required
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              minLength="10"
              value={props.phone}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Department:
            <select onChange={props.handleSelect}>
              <option value="none">--Please Select--</option>
              <option value="IT Development">IT Development</option>
              <option value="IT Maintenance">IT Maintenance</option>
              <option value="IT QA/QC">IT QA/QC</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Mailing Address:
            <input
              name="address"
              value={props.address}
              onChange={props.handleChange}
            />
          </label>
        </div>
      </div>
      <div className="emergencyContact">
        <h5>Emergency Contact:</h5>
        <label>
          First Name:
          <input
            name="emergencyContactFirstName"
            pattern="[a-zA-Z\s]+"
            value={props.emergencyFirstName}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="emergencyContactLastName"
            pattern="[a-zA-Z\s]+"
            value={props.emergencyLastName}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            name="emergencyContactPhone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            minLength="10"
            value={props.emergencyPhone}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Address:
          <input
            name="emergencyContactAddress"
            value={props.emergencyAddress}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Relationship:
          <input
            name="emergencyContactRelationship"
            pattern="[a-zA-Z\s]+"
            value={props.emergencyRelationship}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <button>Save Changes</button>
    </form>
  );
}
