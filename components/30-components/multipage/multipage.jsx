'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router';

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./multipage.scss');
}

const ACTIVE = { color: '#0F0' };

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.route.content);
    let content = (
      <ul>
        <li><Link to="/" activeStyle={ACTIVE}>Top</Link></li>
        <li><Link to="/derp" activeStyle={ACTIVE}>Secondary</Link></li>
        <li><Link to="/derk" activeStyle={ACTIVE}>Trimary</Link></li>
      </ul>
    );

    return (
      <div>
        <h1>APP!</h1>
        {content}

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
  propTypes: {
    content: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      content: {}
    };
  },
  render() {
    let content;
    console.log(this.props.content);
    if (util.canUseDOM()) {
      content = (
        <Router history={hashHistory}>
          <Route path="/" component={App} content={this.props.content}>
            <IndexRoute component={Index}/>
            <Route path="derp" component={About}/>
            <Route path="derk" component={Users}/>
          </Route>
        </Router>
      );
    }
    else {
      content = (<div></div>);

    }
    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = MultiPage;
