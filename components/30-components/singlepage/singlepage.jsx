'use strict';
const _ = require('lodash');
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Sticky } from 'react-sticky';
import { Breadcrumb } from '30-components/basic/breadcrumb/breadcrumb.jsx';

const Elevator = require('elevator.js');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./singlepage.scss');
}


let SinglePage = React.createClass({
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
      let breadcrumbTitle = 'Overview';
      let h1 = [];

      let menu = _.map(this.props.content.props.children, (element, index) => {
        if (_.indexOf(['h1', 'h2'], element.type) >= 0 && element.menu !== false) {
          // For record-keeping purposes.
          if (element.type === 'h1') {
            h1.push(util.machineName(element.props.children));
          }
          let elementID = (element.type === 'h1') ? _.last(h1) : _.last(h1) + '-' + util.machineName(element.props.children);
          // Modify the react component with additional metadata
          // for presentation on the page.
          let mocked = React.cloneElement(element, {
            id: `${elementID}`
          });
          this.props.content.props.children[index] = mocked;


          // Yield menu item for this variable, then include special link to elevate.
          let elevateToSection = () => {
            new Elevator({
              targetElement: document.querySelector(`#${elementID}`),
              verticalPadding: 60, // pixels
              duration: 1000 // milliseconds
            }).elevate();
          }
          return (<li><a href={`#/${elementID}`} onClick={elevateToSection}>{element.props.children}</a></li>);

        }
      });

      return (
        <div className="grid">
          <Sticky topOffset={-10} bottomOffset={1000}>
            <Breadcrumb title={breadcrumbTitle} />
            <div className="col col--1-4">
              <div className="nav-anchor">
                <ul className="nav-anchor__top-level">
                  {menu}
                </ul>
              </div>
            </div>
          </Sticky>

          <div className="col col--3-4">
            {this.props.content}
          </div>
        </div>
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

module.exports = SinglePage;
