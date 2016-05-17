'use strict';

const React = require('react');

const ContainerPage = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: 'React Container Demo'
    };
  },
  render: function () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title} - Urban Institute</title>
          <link href="./css/all.css" media="all" rel="stylesheet" />
        </head>
        <body>
          <div id="app"></div>
          <script src='./bundles/react-container.bundle.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = ContainerPage;
