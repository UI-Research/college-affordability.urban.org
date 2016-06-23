'use strict';
const _ = require('lodash');
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';
import { Breadcrumb } from '30-components/basic/breadcrumb/breadcrumb.jsx';

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./multipage.scss');
}


// Create a menu in our multi page section.
// This supports two levels (on purpose to avoid ovely-complicated menu setups).
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let links = this.props.route.content.links;
    let content = _.map(links, (target, index) => {
      let content;
      let secondaryMenu;

      if (typeof target == 'string') {
        if (typeof links[index + 1] == 'object') {
          secondaryMenu = (
            <ul className="nav-anchor__second-level">
              {
                _.map(links[index + 1], (target, index) => {
                  return (
                    <li><Link to={target} activeClassName="active" key={target}>{this.props.route.content.content[target].title}</Link></li>
                  );
                })
              }
            </ul>
          );
        }
        let link = (index == 0) ? '/' : target;
        content = (
          <li>
            <Link to={link} activeClassName="active" key={target}>{this.props.route.content.content[target].title}</Link>
            {secondaryMenu}
          </li>
        );
      }
      return content;
    });

    return (
      <div className="grid">
        <Sticky topOffset={-50}>
          <Breadcrumb title="Section Title Section TitleSection TitleSection TitleSection TitleSection TitleSection Title" />
          <div className="col col--1-4">
            <div className="nav-anchor">
              <ul className="nav-anchor__top-level">
                {content}
              </ul>
            </div>
          </div>
        </Sticky>

        <div className="col col--3-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
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
      content = (
        <Router history={hashHistory}>
          <Route path="/" component={Menu} content={this.props.content}>
            <IndexRoute component={Content} jsx={this.props.content.content[this.props.content.links[0]].content} />
            {
              _.map(links, (target) => {
                return (<Route path={target} component={Content} key={target} jsx={this.props.content.content[target].content} />);
              })
            }
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