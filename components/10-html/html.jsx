'use strict';
import React, { Component } from 'react';
import util from 'util.jsx';
import GoogleTagManager from 'google-tag-manager.jsx';
import ReactGA from 'react-ga'

if (util.canUseDOM()) {
  require('./html.scss');
}

export default class HTML extends Component {
  render() {
    let pageBundle = `/bundle--${this.props.machineName}.js`;
    let html = (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@urbaninstitute" />
          <meta name="twitter:creator" content="@urbaninstitute" />
          <meta name="twitter:title" content="Understanding College Affordability" />
          <meta name="twitter:description" content='Rising concerns over tuition and student debt have led to a sense that college has become "unaffordable." But what does affordability actually mean?' />
          <meta name="twitter:image" content="http://collegeaffordability.urban.org/img/social.jpg" />
          <meta property="og:title" content="Understanding College Affordability" />
          <meta property="og:description" content='Rising concerns over tuition and student debt have led to a sense that college has become "unaffordable." But what does affordability actually mean?' />
          <meta property="og:image" content="http://collegeaffordability.urban.org/img/social.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:url" content="http://urbn.is/2nPYxhg" />

          <link href="/components.css" rel="stylesheet" />
          <title>{this.props.title} - Urban Institute</title>
        </head>
        <body>
          <GoogleTagManager gtmId='GTM-MKBD2W' />
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
