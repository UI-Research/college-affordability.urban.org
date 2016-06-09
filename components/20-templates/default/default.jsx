'use strict';

const React = require('react'),
      ExecutionEnvironment = require('exenv');

const HTML = require('10-html/html.jsx');
const Header = require('./components/header.jsx');

if (ExecutionEnvironment.canUseDOM) {
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
    for (let x=0; x<images.length; x++) {
      let img_tag = images[x];
      img_tag.setAttribute('data-src', img_tag.getAttribute('src'));
      img_tag.setAttribute('src', img_tag.getAttribute('src').replace('img/', 'img/preview/'));
    }
    // Force an update to reload the original src.
    setTimeout(function (component) {
      component.forceUpdate();
    }, 150, this);
  },
  componentDidUpdate: function() {
    // Set back to the original src. 
    let images = document.querySelectorAll('img[data-src]');
    for (let x=0; x<images.length; x++) {
      let img_tag = images[x];
      img_tag.setAttribute('src', img_tag.getAttribute('data-src'));
      img_tag.removeAttribute('data-src');
    }
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
