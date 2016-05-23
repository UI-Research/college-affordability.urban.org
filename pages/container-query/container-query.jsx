'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');
const TemplateDefault = require('../../components/20-templates/default/default.jsx');

const ContainerPage = React.createClass({
  render: function() {
    let content = (
    <div>
      <div id="app"></div>
      <script src="../bundle--vendor.js"></script>
      <script src='../bundle--container-query.js'></script>
    </div>
    );

    let title = ('React Container Demo'),
      includeHTML = true;

    return (
      <TemplateDefault content={content} title={title} includeHTML={includeHTML} />
    );
  }
});

module.exports = ContainerPage;
