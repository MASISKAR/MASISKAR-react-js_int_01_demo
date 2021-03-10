import React, {useEffect} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {logout} from './../store/userActions';
import {connect} from 'react-redux';
import {getUserInfo} from './../store/userActions';

function NavMenu({isAuthenticated, logout, getUserInfo, user}){
  console.log('userInfo', user)
  /*  //compnentDidMount, componentDidUpdate
    useEffect(()=>{
        return ()=>{
            //componentWillUnmount
        };
    });

    //compnentDidMount
    useEffect(()=>{

    }, []);

        //componentDidUpdate
        useEffect(()=>{

        }, [isAuthenticated]);
*/

useEffect(()=>{
    if(isAuthenticated){
        getUserInfo();
    }
}, [getUserInfo, isAuthenticated]);

    return (
        <>
        {user && <div className="text-right">{user.name} {user?.surname}</div>}
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
        </>
    );
}

const mapStateToProps = (state)=>{
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.userInfo
    };
}

const mapDispatchToProps = {
    logout,
    getUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);