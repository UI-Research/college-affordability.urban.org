'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');
const TemplateDefault = require('../../components/20-templates/default.jsx');

const About = React.createClass({
  render: function() {
    let content = <strong>About US !!!</strong>;

    return (
      <TemplateDefault content={content} />
    );
  }
});

module.exports = About;
