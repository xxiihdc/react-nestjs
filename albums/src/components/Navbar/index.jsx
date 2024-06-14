import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/photos">Photos</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Navbar;
