import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonLink = ({ to, children, activeColor, inactiveColor, variant, activeVariant }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Button
      component={Link}
      to={to}
      variant={isActive ? activeVariant : variant}
      style={{
        borderRadius: 50,
        backgroundColor: isActive ? activeColor : inactiveColor,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
