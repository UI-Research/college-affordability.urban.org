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
      let parentIndex = '',
          menuElements = {},
          breadcrumbTitle = '',
          menuLinks = {};
      
      _.each(props.content.props.children, (element, index) => {
        if (!props.sectionTitle && element.type === 'h1') {
          props.sectionTitle = element.props.children;
        }
        // If the DOM elements are either h1 or h2 without the menu=false flag.
        // This is with the assumption the elements are at the base level of the
        // react component.
        if (_.indexOf(['h2', 'h3'], element.type) >= 0 && element.props.menu !== 'false') {
          // For record-keeping purposes.
          if (element.type === 'h2') {
            parentIndex = util.machineName(element.props.children);
            menuElements[parentIndex] = [];
            menuElements[parentIndex].push(element);
          }
          else {
            menuElements[parentIndex].push(element);
          }
          let elementID = (element.type === 'h2') ? parentIndex : parentIndex + '-' + util.machineName(element.props.children);
          // Modify the react component with additional metadata
          // for presentation on the page.
          let mocked = React.cloneElement(element, {
            id: `${elementID}`
          });
          props.content.props.children[index] = mocked;
        }
      });
      
      this.state.menu = _.map(menuElements, (elements, parentIndex) => {
        let parentElement = null,
            subMenu = null;

        subMenu = _.map(elements, (element, index) => {
          let elementID = (element.type === 'h2') ? parentIndex : parentIndex + '-' + util.machineName(element.props.children);
          menuLinks['#' + elementID] = element.props.children;
          // Capture the first menu item.
          if (!breadcrumbTitle) {
            breadcrumbTitle = element.props.children;
          }
          if (element.type === 'h2') {
            parentElement = element;
            return null;
          }
          else if (element.type === 'h3') {
            let className = 'nav-anchor__second-level ' + parentIndex;
            return (
              <li className={parentIndex} key={elementID}><a href={`#/${elementID}`} onClick={this.elevateToSection.bind(this)}>{element.props.children}</a></li>
            );
          }
        });

        let arrow = null;
        if (subMenu.length > 1) {
          arrow = <span onClick={this.toggleSection} className="fa fa-chevron-down"></span>;
          subMenu = <ul className="nav-anchor__second-level">{subMenu}</ul>;
        }
        return (
          <li key={parentIndex}><a href={`#/${parentIndex}`} onClick={this.elevateToSection.bind(this)}>{parentElement.props.children}</a>{arrow}{subMenu}</li>
        );
      });

      if (props.menuTopSectionName) {
        breadcrumbTitle = props.menuTopSectionName;
        menuLinks[''] = props.menuTopSectionName;
        let topMenu = [(<li><a href="#" onClick={this.elevateToSection.bind(this)}>{props.menuTopSectionName}</a></li>)];
        this.state.menu = _.concat(topMenu, this.state.menu);
      }

      // If a hash exists on payload, automatically animate to that point on the page.
      if (window.location.hash) {
        let initialID = _.replace(window.location.hash, '/', '');

        // Determine what the state of the breadcrumb should be.
        _.each(menuLinks, function(sectionName, index) {
          if (initialID === index) {
            breadcrumbTitle = sectionName;
          }
        });

        // Scroll to the specific point on the page based on URL hash parameters.
        let elevate = () => {
          new Elevator({
            targetElement: document.querySelector(`${initialID}`),
            verticalPadding: 70, // pixels
            duration: 1500 // milliseconds
          }).elevate();
        };
        
        if (window.addEventListener) {
          window.addEventListener('load', function () {
            setTimeout(elevate, 500);
          });
        }
      }

      if (breadcrumbTitle) {
        this.state.breadcrumbTitle = breadcrumbTitle;
      }

      this.state.menu = _.compact(this.state.menu);
      this.setState({
        menu: this.state.menu,
        breadcrumbTitle: this.state.breadcrumbTitle
      });
    }
  }
  elevateToSection(event) {
    let anchor = event.target;
    let href = anchor.getAttribute('href');
    href = _.replace(href, '/', '');
    const targetElement = document.querySelector(href);
    
    new Elevator({
      targetElement: targetElement,
      verticalPadding: 70, // pixels
      duration: 1000 // milliseconds
    }).elevate();

    this.setState({
      breadcrumbTitle: anchor.textContent
    });
    // Toggle/close the sidenav.
    let topChevron = document.querySelector('.nav-anchor > .fa');
    topChevron.click();
  }
  setActiveSection() {
    let activeSection = document.querySelector('h2.active__section');
    console.log(activeSection.textContent);
  }
  toggleSection(event) {
    let target = event.target;
    let parent = event.target.parentElement;
    let menu = parent.querySelector('ul');
    if (target.classList.contains('fa-chevron-down')) {
      target.classList.remove('fa-chevron-down');
      target.classList.add('fa-chevron-left');
    }
    else {
      target.classList.remove('fa-chevron-left');
      target.classList.add('fa-chevron-down');
    }
    menu.classList.toggle('open');
  }
  componentDidMount() {
    if (util.canUseDOM()) {
      // Position the sidenav over the first h2 in the main content.
      let h2 = document.querySelector('.col--3-4 h2');
      if (h2) {
        let sideNav = document.querySelector('.sticky__wrapper');
        if (sideNav) {
          let top = h2.offsetTop + 'px';
          sideNav.style.top = h2.offsetTop;
          sideNav.setAttribute('data-top', h2.offsetTop);
        }
      }
    }
  }
  handleStickyStateChange(isSticky) {
    // Set the top of the side nav if not sticky.
    if (!isSticky) {
      let sideNav = document.querySelector('.sticky__wrapper');
      if (sideNav && sideNav.hasAttribute('data-top')) {
        sideNav.style.top = sideNav.getAttribute('data-top');
      }
    }
  }
  render() {
    if (util.canUseDOM()) {
      return (
        <div className="grid">
          <Sticky className="sticky__wrapper" topOffset={-5} bottomOffset={30} onStickyStateChange={this.handleStickyStateChange.bind(this)}>
            <Breadcrumb section={this.props.sectionTitle} title={this.state.breadcrumbTitle} />
            <div className="col col--1-4">
              <div className="nav-anchor">
                <h2 className="active__section">{this.state.breadcrumbTitle}</h2>
                <span className="fa fa-chevron-down" onClick={this.toggleSection}></span>
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
