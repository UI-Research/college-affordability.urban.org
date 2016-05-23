'use strict';

const React = require('react');

const HTML = React.createClass({
  propTypes: {
    includeHTML: React.PropTypes.bool,

    title: React.PropTypes.string,
    machineName: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      includeHTML: false,

      title: 'Page',
      machineName: '',
    };
  },
  render: function() {
    let pageBundle = `../bundle--${this.props.machineName}.js`;
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
          <script src="../bundle--components.js"></script>
          <script src={pageBundle}></script>
        </body>
      </html>
    );
    let fragment = this.props.includeHTML ? html : (<div>{this.props.children}</div>);

    return (fragment);
  }
});

module.exports = HTML;
