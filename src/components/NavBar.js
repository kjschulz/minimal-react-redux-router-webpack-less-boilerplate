import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Logo/Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        <Link to="/hello">Hello</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link to="/counter">Counter</Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>
          <Link to="/hello">Hello Again</Link>
        </MenuItem>
        <MenuItem eventKey={3.2}>
          <Link to="/counter">Counter Again</Link>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>
          <Link to="/invalid-route">Invalid Route</Link>
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBar;
