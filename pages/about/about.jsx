'use strict';

const React = require('react');
const TemplateDefault = require('../../components/20-templates/default.jsx');

const About = React.createClass({
  render: function() {
    let content = <strong>About!!!</strong>;

    return (
      <TemplateDefault content={content} />
    );
  }
});

ReactDOM.render((
  <About />
), document.getElementById('container'));

//module.exports = About;
