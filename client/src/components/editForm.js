import React from 'react';

export default function Edit(props) {
    return(
        <form className="edit-form" onSubmit={props.onSubmit}>
            <label>
                First Name:
                <input 
                name="firstName"
                value={props.firstName}
                onChange={props.handleChange}
                />
            </label>
            <label>
                Last Name:
                <input 
                name="lastName"
                value={props.lastName}
                onChange={props.handleChange}
                />
            </label>
            <label>
                Email:
                <input 
                name="email"
                value={props.email}
                onChange={props.handleChange}
                />
            </label>
            <label>
                Phone Number:
                <input 
                name="phone"
                value={props.phone}
                onChange={props.handleChange}
                />
            </label>
            <button>Save Changes</button>
        </form>
    )
}