import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TargetEmployee() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Target Employee Page</h1>
      <h1>Employee Edit function will be here too</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Return to Master Tracker
      </button>
    </div>
  );
}
