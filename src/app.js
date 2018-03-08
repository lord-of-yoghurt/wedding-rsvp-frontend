// React dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ReactRouter dependencies and custom history
import AppRouter, { history } from './routers/AppRouter';

// style imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// component imports
import LoadingPage from './components/LoadingPage';
import Dashboard from './components/Dashboard';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
