'use strict';
const _ = require('lodash');
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router';

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./multipage.scss');
}

const ACTIVE = { color: '#0F0' };

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let links = this.props.route.content.links;
    let lastLink;
    let content = _.map(links, (target) => {
      let content;
      switch (typeof target) {
        case 'string':
          content = (
            <li><Link to={target} activeStyle={ACTIVE} key={target}>{target}</Link></li>
          );
          break;
        case 'object':
          content = (
            <ul>
              {
                _.map(target, (target) => {
                  return (
                    <li><Link to={target} activeStyle={ACTIVE} key={target}>{target}</Link></li>
                  )
                })
              }
            </ul>
          );
          break;
        default:
          break;
      }
      lastLink = 'target';

      return content;
    });

    return (
      <div>
        <h1>APP!</h1>
        <ul>
          {content}
        </ul>

        <div className="content_regions">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    console.log(this.props.route.jsx);
    return (
      <div>
        {this.props.route.jsx}
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

    if (util.canUseDOM()) {
      let links = _.flattenDeep(this.props.content.links);
      console.log(links);

      content = (
        <Router history={hashHistory}>
          <Route path="/" component={Menu} content={this.props.content}>
            <IndexRoute component={Index}/>
            {_.map(links, (target) => {
              return (<Route path={target} component={Content} key={target} jsx={this.props.content.content[target].content} />);
            })}
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
