import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
// import RefDemo from './demo/RefDemo';
import Hooks from './demo/Hooks';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <Hooks />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

