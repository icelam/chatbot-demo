import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Utils
import asyncComponent from './utils/AsyncComponent';

// Styles
import './styles/App.scss';

const ChatbotPage = asyncComponent(() => import(/* webpackChunkName: 'ChatbotPage' */ 'pages/Chatbot'));
const NotFound = asyncComponent(() => import(/* webpackChunkName: 'NotFound' */ 'pages/NotFound'));

const App = () => (
  <div id="app">
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={ChatbotPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
