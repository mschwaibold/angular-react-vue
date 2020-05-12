import React, { useState } from 'react';
import { Button, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu(props) {
  const [state, setState] = useState({ collapsed: true });

  function toggleNavbar() {
    setState({ collapsed: !state.collapsed });
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">MoviesR</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              {!props.appState.isLoggedIn &&
                <NavItem>
                  <Button className="text-dark" color="link" onClick={props.appState.auth.login}>Login</Button>
                </NavItem>
              }
              {props.appState.isLoggedIn &&
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="" onClick={props.appState.auth.logout}>Logout</NavLink>
                </NavItem>
              }
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/movies">Movies</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
