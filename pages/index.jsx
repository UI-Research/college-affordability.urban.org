'use strict';

const React = require('react');
const TemplateDefault = require('../components/20-templates/default.jsx');

const Index = React.createClass({
  render: function() {
    let contentz = <strong>42qfrv</strong>;

    return (
      <TemplateDefault content={contentz} />
    );
  }
});

module.exports = Index;
