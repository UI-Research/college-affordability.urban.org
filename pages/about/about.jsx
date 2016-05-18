'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ExecutionEnvironment = require('exenv');
const TemplateDefault = require('../../components/20-templates/default.jsx');

const About = React.createClass({
  render: function() {
    let content = <strong>About US !!!</strong>;

    return (
      <TemplateDefault content={content} />
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  ReactDOM.render((
    <About />
  ), document.html);
}

module.exports = About;
