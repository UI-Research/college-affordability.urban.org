'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');
const TemplateDefault = require('../../components/20-templates/default.jsx');

const Home = React.createClass({
  render: function() {
    let content = <strong>Home</strong>;

    return (
      <TemplateDefault content={content} />
    );
  }
});

ReactDOM.render((
  <Home />
), document.getElementById('container'));

//module.exports = Home;
