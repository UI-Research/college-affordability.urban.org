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
      headerHeight: 0,
      sectionTitle: ''
    };
  }
  elevateToSection(event) {
    const anchor = event.target;

    // Toggle/close the sidenav.
    let topChevron = document.querySelector('.nav-anchor h2 .fa');
    if (topChevron) {
      topChevron.click();
    }

    const href = _.replace(anchor.getAttribute('href'), '/', '');
    const targetElement = document.querySelector(href);
    new Elevator({
      targetElement: targetElement,
      verticalPadding: 60, // pixels
      duration: 1000 // milliseconds
    }).elevate();

    this.setState({
      breadcrumbTitle: anchor.textContent
    });
  }
  handleResize() {
    // Re-position the sidenav over the first h2 in the main content.
    let checkHeader = () => {
      let header = document.querySelector('.header-site');
      const headerHeight = header.offsetHeight;
      // Check if the header changed height - recalc offsets.
      if (this.state.headerHeight != headerHeight) {
        let stickyNav = document.querySelector('.sticky-nav');
        // Adjust the sticky padding, as the Sticky component doesn't,
        // but only when it's not sticky.
        if (!_.includes(header.classList, 'header-sticky')) {
          let stickyHeader = document.querySelector('.sticky-header');
          stickyHeader.previousElementSibling.style.paddingBottom = headerHeight + 'px';
        }
        this.handleStickyStateChange(stickyNav.classList.contains('sticky'));
        this.setState({
          headerHeight: headerHeight
        });
      }
    };
    // Allow re-render time.
    setTimeout(checkHeader, 1);
  }
  handleScroll() {
    // If we're at the bottom, make the last menu item active.
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if ((window.innerHeight + scrollTop) >= document.body.offsetHeight) {
      const anchors = document.querySelectorAll('.nav-anchor__top-level a');
      const anchor = _.findLast(anchors);
      const href = _.replace(anchor.getAttribute('href'), '/', '');
      let targetElement = document.querySelector(href);
      this.setActiveSection(targetElement);
    }
    // Determine the current section based on position.
    else {
      // Since the header is sticky, get the 'top' below the header.
      const offsetTop = document.querySelector('.header-site').offsetHeight + 30;
      let headers = document.querySelectorAll('.col--3-4 h2[id], .col--3-4 h3[id]');
      let previousElement = null;

      _.each(headers, (element) => {
        let top = element.getBoundingClientRect().top;
        // Header is at/above the content top.
        if (top <= offsetTop) {
          this.setActiveSection(element);
        }
        // Active header is below the top, previous section should now be active.
        else if (element.classList.contains('active') && previousElement) {
          this.setActiveSection(previousElement);
        }
        previousElement = element;
      });
    }
  }
  setActiveSection(element) {
    let anchor = null;
    let activeHeader = document.querySelector('.col--3-4 h2.active, .col--3-4 h3.active');
    let sectionTitle = '';
    if (activeHeader) {
      activeHeader.classList.remove('active');
    }
    if (element) {
      let activeSection = document.querySelector('h2.active__section');
      activeSection.firstChild.nodeValue = sectionTitle = element.textContent;
      element.classList.add('active');
      const target = '#/' + element.getAttribute('id');
      anchor = document.querySelector(`.nav-anchor__top-level a[href="${target}"]`);
    }
    this.setActiveMenu(anchor);
    this.setState({
      breadcrumbTitle: sectionTitle
    });
  }
  setActiveMenu(anchor) {
    let activeAnchor = document.querySelector('.nav-anchor__top-level a.active');
    if (activeAnchor) {
      activeAnchor.classList.remove('active');
    }

    // Close all second level uls.
    let uls = document.querySelectorAll('.nav-anchor__top-level ul.nav-anchor__second-level');
    _.each(uls, (ul) => {
      ul.classList.remove('open');
      let chevron = ul.previousElementSibling;
      chevron.classList.remove('fa-chevron-left');
      chevron.classList.add('fa-chevron-down');
    });

    if (anchor) {
      anchor.classList.add('active');
      // Leave the parent second-level ul open.
      let ul = anchor.parentElement.parentElement;
      // Open the second level menu, if a top level is active.
      if (ul.classList.contains('nav-anchor__top-level')) {
        ul = anchor.parentElement.querySelector('ul');
      }
      if (ul && ul.classList.contains('nav-anchor__second-level')) {
        ul.classList.add('open');
        let chevron = ul.previousElementSibling;
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-left');
      }
    }
  }
  toggleSection(event) {
    let target = event.target;
    let menu = null;
    if (target.parentElement.tagName.toLowerCase() === 'h2') {
      menu = target.parentElement.parentElement.querySelector('ul');
    }
    else {
      menu = target.parentElement.querySelector('ul');
    }
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
  handleStickyStateChange(isSticky) {
    const headerHeight = document.querySelector('.header-site').offsetHeight;
    let sideNav = document.querySelector('.sticky-nav');

    // Set the top of the side nav if not sticky.
    if (!isSticky) {
      // Re-position the sidenav over the first h2 in the main content.
      let unstick = () => {
        let h2 = document.querySelector('.col--3-4 h2');
        if (h2 && sideNav && !sideNav.classList.contains('sticky')) {
          sideNav.style.top = h2.offsetTop + 'px';
          sideNav.style.marginTop = '';
        }
      };
      // Set a timeout,
      // as the Sticky component overrides our style.
      setTimeout(unstick, 5);
    }
    else {
      let breadcrumb = document.querySelector('.breadcrumb');
      // Set our own margin offset only when the breadcrumb is hidden (mobile).
      if (sideNav && breadcrumb) {
        let styles = window.getComputedStyle(breadcrumb);
        if (styles.display == 'none') {
          sideNav.style.marginTop = headerHeight + 'px';
        }
        else {
          sideNav.style.marginTop = '';
        }
      }
    }
  }
  componentDidMount() {
    if (this.props.sectionTitle) {
      this.setState({
        sectionTitle: this.props.sectionTitle
      });
    }

    if (util.canUseDOM()) {
      let parentIndex = '',
          menuElements = {},
          breadcrumbTitle = '',
          menuLinks = {};

      _.each(this.props.content.props.children, (element, index) => {
        if (!this.state.sectionTitle && element.type === 'h1') {
          this.setState({
            sectionTitle: element.props.children
          });
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
          this.props.content.props.children[index] = mocked;
        }
      });

      this.state.menu = _.map(menuElements, (elements, parentIndex) => {
        let parentElement = null,
            subMenu = null;

        subMenu = _.map(elements, (element) => {
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

      if (this.props.menuTopSectionName) {
        breadcrumbTitle = this.props.menuTopSectionName;
        menuLinks[''] = this.props.menuTopSectionName;
        let topMenu = [(<li><a href="#" onClick={this.elevateToSection.bind(this)}>{this.props.menuTopSectionName}</a></li>)];
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

        window.addEventListener('load', function () {
          setTimeout(elevate, 500);
        });
      }

      window.addEventListener('resize', this.handleResize.bind(this));
      window.addEventListener('scroll', this.handleScroll.bind(this));

      if (breadcrumbTitle) {
        this.state.breadcrumbTitle = breadcrumbTitle;
      }

      this.state.menu = _.compact(this.state.menu);
      this.setState({
        menu: this.state.menu,
        breadcrumbTitle: this.state.breadcrumbTitle
      });
    }

    if (util.canUseDOM()) {
      this.setState({
        headerHeight: document.querySelector('.header-site').offsetHeight
      });
      let activeAnchor = document.querySelector('.nav-anchor__top-level a.active');
      if (!activeAnchor) {
        let firstAnchor = document.querySelector('.nav-anchor__top-level a');
        if (firstAnchor) {
          firstAnchor.classList.add('active');
        }
        else {
          // TODO: What do we do here?
        }
      }
    }
  }
  render() {
    if (util.canUseDOM()) {
      return (
        <div className="grid">
          <Sticky className="sticky-nav" topOffset={-5} bottomOffset={30} onStickyStateChange={this.handleStickyStateChange.bind(this)}>
            <Breadcrumb section={this.state.sectionTitle} title={this.state.breadcrumbTitle} />
            <div className="col col--1-4">
              <div className="nav-anchor">
                <h2 className="active__section">{this.state.breadcrumbTitle}<span className="fa fa-chevron-down" onClick={this.toggleSection}></span></h2>
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
  sectionTitle: React.PropTypes.string,
  menuTopSectionName: React.PropTypes.string
};
SinglePage.defaultProps = {
  content: {},
  sectionTitle: '',
  menuTopSectionName: ''
};
