'use strict';

const React = require('react');
const HTML = require('../components/10-html/html.jsx')

const Index = React.createClass({
  render: function() {
    return (
      <HTML title="Winner" content="Loser" />
    );
  }
});

module.exports = Index;
