import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

export default function NavMenu(){

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
            <Link to='/'>Home</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                
            <Link to='/task'>Task</Link>

            <a href="https://reactrouter.com/web/guides/quick-start" target='_blank'>Go to documentation</a>

            </Nav>
        </Navbar>
    );
}