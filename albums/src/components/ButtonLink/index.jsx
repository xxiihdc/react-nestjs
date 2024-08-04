import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonLink = ({ to, children, activeColor, inactiveColor, variant, activeVariant }) => {
  const location = useLocation();
  const isActive = location.pathname === to;


  const [count, setCount] = useState(0);

  const handle = () => {
    setCount((prevState) => {
      return prevState + 1
    })

    setCount((prevState) => {
      return prevState + 1
    })
  }

  const handle2 = () => {
    setCount(count +1)
    setCount(count +1)
  }

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
