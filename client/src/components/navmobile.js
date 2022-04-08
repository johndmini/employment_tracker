import React, { useState } from 'react';
import '../Styles/nav.css';

export default function NavMobile() {
  const [navToggle, setNavToggle] = useState('close');
  console.log(navToggle);
  return (
    <nav>
      <div
        className="nav-mobile"
        role="button"
        onClick={() => setNavToggle(navToggle === 'open' ? 'close' : 'open')}
      >
        <i className={navToggle}></i>
        <i className={navToggle}></i>
        <i className={navToggle}></i>
      </div>
      { navToggle === 'open' && <div className='mobile-links-container'>
          <ul className='mobile-links'>
              <li><button>Master Tracker</button></li>
              <li><button>Add New Employee</button></li>
          </ul>
      </div>}
    </nav>
  );
}
