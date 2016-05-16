'use strict';

const React = require('react');
const TemplateDefault = require('../components/20-templates/default.jsx');

const Index = React.createClass({
  render: function() {
    let content = <strong>asdfasdfasdf</strong>;

    return (
      <TemplateDefault content={content} />
    );
  }
});

module.exports = Index;
