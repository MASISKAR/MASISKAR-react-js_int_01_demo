import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

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
            exact
            activeClassName = 'activeLink'
            to='/task'
            
            >Task</NavLink>

            <a href="https://reactrouter.com/web/guides/quick-start" target='_blank'>Go to documentation</a>

            </Nav>
        </Navbar>
    );
}