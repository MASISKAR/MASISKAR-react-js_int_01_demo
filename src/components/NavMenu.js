import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function NavMenu(){

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
            <NavLink 
            to='/'
            activeClassName = 'activeLink'
            exact
            >
             Home
             </NavLink>
            </Navbar.Brand>

            <Nav className="mr-auto">
            <NavLink 
            to='/about'
            activeClassName = 'activeLink'
            exact
            >
             About
             </NavLink>                
             <NavLink 
             to='/contact'
             activeClassName = 'activeLink'
             exact
             >
              Contact
              </NavLink>

            </Nav>
        </Navbar>
    );
}