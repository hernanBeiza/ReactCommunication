import './Menu.css';
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Menu(props) {

	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    setCollapsed( !props.flagAbrirMenu )
  }, [props.flagAbrirMenu]);

  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto">Comunicación Hijo Padre</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink>Mensaje 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Mensaje 2</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
