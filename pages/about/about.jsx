'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ExecutionEnvironment = require('exenv');
const TemplateDefault = require('../../components/20-templates/default.jsx');


const Derp = require('./derp.js');

const About = React.createClass({
  render: function() {

    return (
      <TemplateDefault title="About USA" includeHTML={this.props.includeHTML}>
        {Derp.content}
      </TemplateDefault>
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
