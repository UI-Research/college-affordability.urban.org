'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ExecutionEnvironment = require('exenv');
const TemplateDefault = require('../../components/20-templates/default.jsx');
const Text = require('../../components/30-components/basic/text/text.jsx');

const d3 = require('d3');

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
    let content = (
      <div>
        <Text title="Law & Order">
          <p>What are you doing?</p>
          <p>No me gusta!</p>
        </Text>
        <div id="asdf"><strong>About US !!!</strong></div>
      </div>
    );

    return (
      <TemplateDefault title="asdf" includeHTML={this.props.includeHTML}>
        {content}
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
