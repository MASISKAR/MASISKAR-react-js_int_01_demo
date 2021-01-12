import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {logout} from './../store/userActions';
import {connect} from 'react-redux';

function NavMenu({isAuthenticated, logout}){

    return (
        <Navbar bg="light" variant="light">
        {
            isAuthenticated ? 
            <Navbar.Brand>
            <NavLink 
            to='/'
            activeClassName = 'activeLink'
            exact
            >
             Home
             </NavLink>
            </Navbar.Brand> :
            <>
            <NavLink 
            to='/register'
            activeClassName = 'activeLink'
            exact
            >
             Register
             </NavLink>
             <NavLink 
             to='/login'
             activeClassName = 'activeLink'
             exact
             >
              Login
              </NavLink>
              </>
        }
            

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

            {isAuthenticated && 
                <Button 
                variant="success"
                onClick={logout}
                >Logout</Button>
            }
            
        </Navbar>
    );
}

const mapStateToProps = (state)=>{
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    };
}

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);