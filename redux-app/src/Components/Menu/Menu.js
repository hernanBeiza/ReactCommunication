import React, { useState, useEffect } from 'react';

import './Menu.css';
import {
  Navbar,
  NavbarBrand,
  Nav} from 'reactstrap';

function Menu() {

	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto">Redux App</NavbarBrand>
      {/**
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink>Lista de Items</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Agregar item</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      **/}
    </Navbar>
  );
}

export default Menu;
