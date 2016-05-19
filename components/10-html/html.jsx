'use strict';
const React = require('react');

const HTML = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,

    title: React.PropTypes.string,
    template: React.PropTypes.object,
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,

      title: 'Page',
      template: 'Placeholder'
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
          <div id="container">{this.props.template}</div>

          <script src="../bundle--vendor.js"></script>
          <script src="../bundle--about.js"></script>
        </body>
      </html>
    );
    let fragment = this.props.includeHTML ? html : this.props.content;

    return (fragment);
  }
});

module.exports = HTML;
