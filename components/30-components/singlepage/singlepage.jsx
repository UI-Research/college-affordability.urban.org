'use strict';
import _ from 'lodash';
import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import Breadcrumb from '30-components/basic/breadcrumb/breadcrumb.jsx';

const Elevator = require('elevator.js');

import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./singlepage.scss');
}

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbTitle : '',
      menu: '',
      topSection: ''
    };

    if (util.canUseDOM() && window.location.hash) {
      let initialID = _.replace(window.location.hash, '/', '');

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

      // Scroll to the specific point on the page based on URL hash parameters.
      let elevate = () => {
        new Elevator({
          targetElement: document.querySelector(`${initialID}`),
          verticalPadding: 95, // pixels
          duration: 500 // milliseconds
        }).elevate();
      };
      // TODO: This is kind of cheesy...I know...
      setTimeout(elevate, 500);
      setTimeout(elevate, 2001);
    }
  }
  render() {
    let content;
    if (util.canUseDOM()) {
      let h1 = [];

      this.state.menu = _.map(this.props.content.props.children, (element, index) => {
        // If the DOM elements are either h1 or h2 without the menu=false flag.
        // This is with the assumption the elements are at the base level of the
        // react component.
        if (_.indexOf(['h2', 'h3'], element.type) >= 0 && element.props.menu !== 'false') {
          // For record-keeping purposes.
          if (element.type === 'h2') {
            h1.push(util.machineName(element.props.children));
          }
          let lastH1 = _.last(h1);
          let elementID = (element.type === 'h2') ? lastH1 : lastH1 + '-' + util.machineName(element.props.children);
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
              verticalPadding: 105, // pixels
              duration: 1000 // milliseconds
            }).elevate();

            this.setState({
              breadcrumbTitle : element.props.children
            });
          };
          if (element.type === 'h2') {
            return (<li key={elementID}><a href={`#/${elementID}`} onClick={elevateToSection}>{element.props.children}</a></li>);
          }
          else if (element.type === 'h3') {
            return (
              <ul key={elementID} className="nav-anchor__second-level">
                <li><a href={`#/${elementID}`} onClick={elevateToSection}>{element.props.children}</a></li>
              </ul>
            );
          }
          else {
            return false;
          }

        }
        return false;
      });

      if (this.props.topSection) {
        // Yield menu item for this variable, then include special link to elevate.
        let elevateToSection = () => {
          new Elevator({
            verticalPadding: 55, // pixels
            duration: 1000 // milliseconds
          }).elevate();

          this.setState({
            breadcrumbTitle : this.props.topSection
          });
        };
        let topMenu = [(<li><a href="#" onClick={elevateToSection}>{this.props.topSection}</a></li>)];
        this.state.menu = _.concat(topMenu, this.state.menu);
      }

      this.state.menu = _.compact(this.state.menu);

      return (
        <div className="grid">
          <Sticky topOffset={-10} bottomOffset={30}>
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
}

SinglePage.propTypes = {
  content: React.PropTypes.object
};
SinglePage.defaultProps = {
  content: {}
};
