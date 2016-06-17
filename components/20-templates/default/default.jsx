'use strict';

const React = require('react'),
      _ = require('lodash');

const HTML = require('10-html/html.jsx');
const Header = require('./components/header.jsx');

const util = require('util.jsx');


if (util.canUseDOM()) {
  require('./default.scss');
}

const TemplateDefault = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,
      title: ''
    };
  },
  componentDidMount: function() {
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
  },
  componentDidUpdate: function() {
    // Set back to the original src.
    let images = document.querySelectorAll('img[data-src]');
    _.forEach(images, function (image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    });
  },
  render: function() {
    return (
      <HTML title={this.props.title} machineName={this.props.machineName} includeHTML={this.props.includeHTML}>
        <Header />
        <div className="main">
          {this.props.children}
        </div>
      </HTML>
    );
  }
});

module.exports = TemplateDefault;
