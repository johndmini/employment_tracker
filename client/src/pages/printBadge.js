import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Badge() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Print Badge Here</h1>
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