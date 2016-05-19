'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ExecutionEnvironment = require('exenv');
const TemplateDefault = require('../../components/20-templates/default.jsx');


const About = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      includeHTML: false
    };
  },
  render: function() {
    let content = (<div id="asdf"><strong>About US !!!</strong></div>);

    return (
      <TemplateDefault content={content} includeHTML={this.props.includeHTML} />
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  require('./about.scss');
  ReactDOM.render((
    <About />
  ), document.getElementById('container'));
}

module.exports = About;
