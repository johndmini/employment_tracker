import React, { useState } from 'react';
import { Menu, MenuItem, Fade, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import '../Styles/nav.css';

export default function NavMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMasterTracker = () => {
    setAnchorEl(null);
    navigate('/');
  }

  const handleNewEmployee = () => {
    setAnchorEl(null);
    navigate('/newemployee')
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <nav className="navMobile-container">
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="primary"
        size="300px"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleMasterTracker}>
          Master Tracker
        </MenuItem>
        <MenuItem onClick={handleNewEmployee}>
          Add Employee
        </MenuItem>
      </Menu>
    </nav>
  );
}
