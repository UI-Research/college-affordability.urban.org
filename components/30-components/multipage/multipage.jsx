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
            <li><Link to={target} activeStyle={ACTIVE}>{target}</Link></li>
          );
          break;
        case 'object':
          content = (
            <ul>
              {_.map(target, (target) => {
                return (
                  <li><Link to={target} activeStyle={ACTIVE}>{target}</Link></li>
                )
              })}
            </ul>
          );
          break;
        default:
          break;
      }
      lastLink = 'target';

      return content;
    });
    // let content = (
    //   <ul>
    //     <li><Link to="/" activeStyle={ACTIVE}>Top</Link></li>
    //     <li><Link to="/derp" activeStyle={ACTIVE}>Secondary</Link></li>
    //     <li><Link to="/derk" activeStyle={ACTIVE}>Trimary</Link></li>
    //   </ul>
    // );
    // let content = (
    //   <div>asdf</div>
    // )

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
class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Secondary</h2>
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
            <Route path="derp" component={About} />
            {_.map(links, (target) => {
              //console.log(this.props.content.content[target].content);
              return (<Route path={target} component={Content} jsx={this.props.content.content[target].content} />);
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
