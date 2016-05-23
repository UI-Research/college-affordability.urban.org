'use strict';

const React = require('react');

const HTML = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,

    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,

      title: 'Page'
    };
  },
  render: function() {
    let html = (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title} - Urban Institute</title>
        </head>
        <body>
          <div id="container">{this.props.children}</div>

          <script src="../bundle--vendor.js"></script>
          <script src="../bundle--about.js"></script>
        </body>
      </html>
    );
    let fragment = this.props.includeHTML ? html : (<div>{this.props.children}</div>);

    return (fragment);
  }
});

module.exports = HTML;
