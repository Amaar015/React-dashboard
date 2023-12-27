import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ReduxProvider store={store}>
    <Router>
    <App />
    </Router>
    </ReduxProvider>
  </React.StrictMode>
);