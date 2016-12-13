import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory  } from 'react-router';

import App from './App';
import Home from './Home';
import Users from './Users';
class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute  component={Home} />
          <Route path="/users:_id" component={Users} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
