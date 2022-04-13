import React from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import '../Styles/nav.css';

export default function Footer() {
  const iconButtonStyle = {
    color: 'white',
    fontSize: '30px',
    ':hover': { color: '#cf6944' },
  };
  return (
    <footer>
      <div>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/johndavid-p-delgado/"
        >
          <LinkedIn sx={iconButtonStyle} />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/johndmini">
          <GitHub sx={iconButtonStyle} />
        </IconButton>
      </div>
      © Copyright 2022 John David Delgado
    </footer>
  );
}
