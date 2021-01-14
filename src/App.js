import React, { PureComponent } from 'react';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/pages/ToDo';
import SingleTask from './components/pages/SingleTask';
import NotFound from './components/pages/NotFound';
import Spinner from './components/Spinner/Spinner';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import CustomRoute from './components/CustomRoute';


class App extends PureComponent {

  componentDidUpdate() {
    const { errorMessage, successMessage, authErrorMessage, authSuccessMessage } = this.props;
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
    }

    if (authErrorMessage) {
      toast.error(authErrorMessage);
    }
    if (authSuccessMessage) {
      toast.success(authSuccessMessage);
    }

  }

  render() {
    const { showSpinner, showAuthSpinner } = this.props;
    return (
      <>
          <div className='app'>
            <NavMenu />
            <Switch>
              <CustomRoute type='private' path='/' exact component={ToDo} />
              <CustomRoute type='private' path='/task/:id' exact component={SingleTask} />
              <Route path='/not-found' exact component={NotFound} />
              <CustomRoute  path='/register' exact component={Register} />
              <CustomRoute  path='/login' exact component={Login} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
              <Redirect to='/not-found' />
            </Switch>

            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        
          {(showSpinner || showAuthSpinner) && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.taskReducer.error,
    successMessage: state.taskReducer.successMessage,
    authErrorMessage: state.authReducer.error,
    authSuccessMessage: state.authReducer.successMessage,
    showSpinner: state.taskReducer.loading,
    showAuthSpinner: state.authReducer.loading
  }
}

export default connect(mapStateToProps, null)(App);
