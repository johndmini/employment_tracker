import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/nav.css';

let useClickOut = (handler) => {
  let ref = useRef();

  useEffect(() => {
    let listener = (e) => {
      if (!ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
  return ref;
};

export default function NavMobile() {
  const [navToggle, setNavToggle] = useState('close');

  const ref = useClickOut(() => {
    setNavToggle('close');
  });

  const navigate = useNavigate();

  return (
    <nav ref={ref} className="navMobile-container">
      <div
        className="nav-mobile"
        role="button"
        onClick={() => setNavToggle(navToggle === 'open' ? 'close' : 'open')}
      >
        <i className={navToggle}></i>
        <i className={navToggle}></i>
        <i className={navToggle}></i>
      </div>
      {navToggle === 'open' && (
        <div className="links-container">
          <ul className="mobile-links">
            <li>
              <button
                onClick={() => {
                  navigate('/');
                }}
              >
                Master Tracker
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/newemployee');
                }}
              >
                Add New Employee
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
