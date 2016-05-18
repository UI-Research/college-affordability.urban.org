'use strict';
const React = require('react');

const HTML = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    template: React.PropTypes.object,
  },
  getDefaultProps: function() {
    return {
      title: 'Page',
      template: 'Placeholder'
    };
  },
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title} - Urban Institute</title>
        </head>
        <body>
          <div id="container"></div>
            {this.props.template}
          <script src="../bundle--vendor.js"></script>
          <script src="../bundle--about.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = HTML;
