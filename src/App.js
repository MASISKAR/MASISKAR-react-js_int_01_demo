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
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';

class App extends PureComponent {

  componentDidUpdate() {
    const { errorMessage, successMessage } = this.props;
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
    }

  }

  render() {
    const { showSpinner } = this.props;
    return (
      <>
          <div className='app'>
            <NavMenu />
            <Switch>
              <Route path='/' exact component={ToDo} />
              <Route path='/task/:id' exact component={SingleTask} />
              <Route path='/not-found' exact component={NotFound} />
              <Route path='/register' exact component={Register} />
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
        
          {showSpinner && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.error,
    successMessage: state.successMessage,
    showSpinner: state.loading,
  }
}

export default connect(mapStateToProps, null)(App);
