import React, { useState } from 'react';
import { Button, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useStateValue } from '../state/StateProvider';
import { Auth } from '../Auth';

export function NavMenu(props) {
  const [state, setState] = useState({ collapsed: true });
  const [stateValue, dispatch] = useStateValue();
  const auth = new Auth();

  if (!stateValue.isAuthenticated) {
    auth.getUser().then(user => {
      if (user) {
        auth.isLoggedIn().then(value => {
          if (value) {
            dispatch({ type: 'login', payload: user });
          }
        })
      }
    })
  }

  function toggleNavbar() {
    setState({ collapsed: !state.collapsed });
  }

  function login() {
    auth.login();
  }

  function logout() {
    auth.logout();
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">MoviesR</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              {!stateValue.isAuthenticated ?
                <NavItem>
                  <Button className="text-dark" color="link" onClick={login}>Login</Button>
                </NavItem>
                :
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="" onClick={logout}>Logout</NavLink>
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
