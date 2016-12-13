import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory  } from 'react-router';

import App from './App';
import Home from './Home';
import User from './User';
class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} >
          <IndexRoute component={App} />
          <Route path="users/:_id" component={User} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
