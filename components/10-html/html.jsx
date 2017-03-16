'use strict';
import React, { Component } from 'react';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./html.scss');
}

export default class HTML extends Component {
  render() {
    /* Detect IE Version... */
    let body_class;
    if (util.canUseDOM() && document.documentMode && document.documentMode <= 10) {
      body_class = 'ie9';
    }

    let pageBundle = `/bundle--${this.props.machineName}.js`;
    let html = (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title} - Urban Institute</title>
        </head>
        <body className={body_class}>
          <div id="container">{this.props.children}</div>

          <script src="/bundle--vendor.js"></script>
          <script src="/bundle--components.js"></script>
          <script src={pageBundle}></script>
        </body>
      </html>
    );
    let fragment = this.props.includeHTML ? html : (<div>{this.props.children}</div>);

    return fragment;
  }
}


HTML.propTypes = {
  includeHTML: React.PropTypes.bool,

  title: React.PropTypes.string,
  machineName: React.PropTypes.string
};
HTML.defaultProps = {
  includeHTML: false,

  title: 'Page',
  machineName: ''
};
