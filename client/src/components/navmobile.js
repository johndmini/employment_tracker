import React, { useState } from 'react';
import { Menu, MenuItem, Fade, IconButton, Link } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import '../Styles/nav.css';

export default function NavMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem component={Link} href={'/'} onClick={handleClose}>
          Master Tracker
        </MenuItem>
        <MenuItem component={Link} href={'/newemployee'} onClick={handleClose}>
          Add Employee
        </MenuItem>
      </Menu>
    </nav>
  );
}
