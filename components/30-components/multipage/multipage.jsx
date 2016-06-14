'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router';

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./multipage.scss');
}

const ACTIVE = { color: 'red' };

class App extends Component {
  render() {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>Top</Link></li>
          <li><Link to="/derp" activeStyle={ACTIVE}>Secondary</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    );
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    );
  }
}


class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Secondary</h2>
      </div>
    );
  }
}

let MultiPage = React.createClass({
  render() {
    let content;
    if (!util.canUseDOM()) {
      content = (<div></div>);
    }
    else {
      content = (
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/derp" component={About}/>
          </Route>
        </Router>
      );
    }
    return (
      <div>
      {content}
      </div>
    );
  }
});

module.exports = MultiPage;
