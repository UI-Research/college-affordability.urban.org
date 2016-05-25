'use strict';

const React = require('react'),
      ExecutionEnvironment = require('exenv');

const HTML = require('../../10-html/html.jsx');

if (ExecutionEnvironment.canUseDOM) {
  require('./default.scss');
}

const Header = require('./components/header.jsx');



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
