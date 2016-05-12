'use strict';
const React = require('react');

const HTML = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      title: 'Page',
      content: 'Placeholder'
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
          {this.props.content}
        </body>
      </html>
    );
  }
});

module.exports = HTML;
