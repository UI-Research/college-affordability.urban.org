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
          <title>{this.props.title} - Urban Institute</title>
        </head>
        <body>
          <GoogleTagManager gtmId='GTM-MKBD2W' />
          <div id="container">{this.props.children}</div>

          <script src="/bundle--vendor.js"></script>
          <script src="/bundle--components.js"></script>
          <script src={pageBundle}></script>
          <script>
              (function (i, s, o, g, r, a, m) {{
                  i['GoogleAnalyticsObject'] = r;
                  i[r] = i[r] || function () { 
                      (i[r].q = i[r].q || []).push(arguments)
                  }, i[r].l = 1 * new Date();
                  a = s.createElement(o),  m = s.getElementsByTagName(o)[0];
                  a.async = 1;
                  a.src = g;
                  m.parentNode.insertBefore(a, m) 
              }})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); 
              ga('create', 'UA-57529944-1', 'auto'); 
              ga('send', 'pageview');
          </script>
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
