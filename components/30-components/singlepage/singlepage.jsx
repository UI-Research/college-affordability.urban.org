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
  getInitialState : function() {
    return {
      breadcrumbTitle : '',
      menu: ''
    };
  },
  componentDidMount: function() {
    if (util.canUseDOM() && window.location.hash) {
      let initialID = _.replace(window.location.hash, '/', '');

      // Scroll to the specific point on the page based on URL hash parameters.
      new Elevator({
        targetElement: document.querySelector(`${initialID}`),
        verticalPadding: 60, // pixels
        duration: 1000 // milliseconds
      }).elevate();

      // Determine what the state of the breadcrumb should be.
      let breadcrumbTitle;
      _.map(this.state.menu, function(menuItem) {
        if (menuItem.props.children.props.href === window.location.hash) {
          breadcrumbTitle = menuItem.props.children.props.children;
        }
      });
      this.setState({
        breadcrumbTitle: breadcrumbTitle
      });

      window.addEventListener('scroll', this.detectPointOnPage);
    }
  },
  detectPointOnPage: function() {
    //console.log('asdf');
  },
  render() {
    let content;
    if (util.canUseDOM()) {
      let h1 = [];

      this.state.menu = _.map(this.props.content.props.children, (element, index) => {
        // If the DOM elements are either h1 or h2 without the menu=false flag.
        // This is with the assumption the elements are at the base level of the
        // react component.
        if (_.indexOf(['h1', 'h2'], element.type) >= 0 && element.props.menu !== "false") {
          // For record-keeping purposes.
          if (element.type === 'h1') {
            h1.push(util.machineName(element.props.children));
          }
          let lastH1 = _.last(h1);
          let elementID = (element.type === 'h1') ? lastH1 : lastH1 + '-' + util.machineName(element.props.children);
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

            this.setState({
              breadcrumbTitle : element.props.children
            });
          }
          if (element.type === 'h1') {
            return (<li key={elementID}><a href={`#/${elementID}`} onClick={elevateToSection}>{element.props.children}</a></li>);
          }
          else if (element.type === 'h2') {
            return (
              <ul className="nav-anchor__second-level">
                <li key={elementID}><a href={`#/${elementID}`} onClick={elevateToSection}>{element.props.children}</a></li>
              </ul>
            );
          }
          else {
            return false;
          }

        }
        return false;
      });

      this.state.menu = _.compact(this.state.menu);

      return (
        <div className="grid">
          <Sticky topOffset={-10} bottomOffset={1000}>
            <Breadcrumb title={this.state.breadcrumbTitle} />
            <div className="col col--1-4">
              <div className="nav-anchor">
                <ul className="nav-anchor__top-level">
                  {this.state.menu}
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
