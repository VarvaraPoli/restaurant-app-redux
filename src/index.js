import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundery from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundery>
        <RestoServiceContext.Provider value={restoService}>
            <Router>
                <App/>
            </Router>
        </RestoServiceContext.Provider>
      </ErrorBoundery>
    </Provider>
    , document.getElementById('root'));

