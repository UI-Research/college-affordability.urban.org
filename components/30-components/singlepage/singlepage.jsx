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
      menuTopSectionName: ''
    };

    if (util.canUseDOM()) {
      let h1 = [],
          breadcrumbTitle = '';
      

      // Do this now so we can check the window hash against an actual menu.
      this.state.menu = _.map(props.content.props.children, (element, index) => {
        if (!props.sectionTitle && element.type === 'h1') {
          props.sectionTitle = element.props.children;
        }
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
          props.content.props.children[index] = mocked;
          if (!breadcrumbTitle) {
            breadcrumbTitle = element.props.children;
          }

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
        }
      });

      if (props.menuTopSectionName) {
        // Yield menu item for this variable, then include special link to elevate.
        let elevateToSection = () => {
          new Elevator({
            verticalPadding: 55, // pixels
            duration: 1000 // milliseconds
          }).elevate();

          this.setState({
            breadcrumbTitle: props.menuTopSectionName
          });
          breadcrumbTitle = props.menuTopSectionName;
        };
        let topMenu = [(<li><a href="#" onClick={elevateToSection}>{props.menuTopSectionName}</a></li>)];
        this.state.menu = _.concat(topMenu, this.state.menu);
      }

      // If a hash exists on payload, automatically animate to that point on the page.
      if (window.location.hash) {
        let initialID = _.replace(window.location.hash, '/', '');
        let breadcrumbTitle = '';

        // Determine what the state of the breadcrumb should be.
        _.map(this.state.menu, function(menuItem) {
          if (!_.isUndefined(menuItem) && menuItem.type === 'li' && menuItem.props.children.props.href === window.location.hash) {
            breadcrumbTitle = menuItem.props.children.props.children;
            return '';
          }
        });
        if (breadcrumbTitle) {
          this.state.breadcrumbTitle = breadcrumbTitle;
        }

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

      this.state.menu = _.compact(this.state.menu);
      this.setState({
        menu: this.state.menu,
        breadcrumbTitle: this.state.breadcrumbTitle
      });
    }
  }
  render() {
    let content;
    if (util.canUseDOM()) {
      return (
        <div className="grid">
          <Sticky className="sticky__wrapper" topOffset={-10} bottomOffset={30}>
            <Breadcrumb section={this.props.sectionTitle} title={this.state.breadcrumbTitle} />
            <div className="col col--1-4">
              <div className="nav-anchor">
                <h2 className="active__section">{this.state.breadcrumbTitle}<span className="fa fa-chevron-down"></span></h2>
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
    return (
      <div></div>
    );
  }
}

SinglePage.propTypes = {
  content: React.PropTypes.object,
  sectionTitle: React.PropTypes.string
};
SinglePage.defaultProps = {
  content: {},
  sectionTitle: ''
};
