'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import HTML from '10-html/html.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { StickyContainer } from 'react-sticky';

import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./default.scss');
}

export default class TemplateDefault extends Component {
  componentDidMount() {
    // Set the src to the preview image, keep track of the original src.
    let images = document.getElementsByTagName('img');
    _.forEach(images, function (image) {
      image.setAttribute('data-src', image.getAttribute('src'));
      image.setAttribute('src', image.getAttribute('src').replace('img/', 'img/preview/'));
    });
    // Force an update to reload the original src.
    setTimeout(function (component) {
      component.forceUpdate();
    }, 150, this);
  }
  componentDidUpdate() {
    // Set back to the original src.
    let images = document.querySelectorAll('img[data-src]');
    _.forEach(images, function (image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    });
  }
  render() {
    return (
      <HTML title={this.props.title} machineName={this.props.machineName} includeHTML={this.props.includeHTML}>
        <StickyContainer>
          <div className="header-container">
            <Header machineName={this.props.machineName} />
          </div>
          <div className="main">
            {this.props.children}
          </div>
          <Footer />
        </StickyContainer>
      </HTML>
    );
  }
}

TemplateDefault.propTypes = {
  includeHTML: React.PropTypes.bool,
  title: React.PropTypes.string
};
TemplateDefault.defaultProps = {
  includeHTML: false,
  title: ''
};
