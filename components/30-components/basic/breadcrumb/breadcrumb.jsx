'use strict';
import React, { Component } from 'react';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./breadcrumb.scss');
}

export default class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="">{this.props.section}</a> / {this.props.title}
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  section: React.PropTypes.string,
  title: React.PropTypes.string
};
Breadcrumb.defaultProps = {
  section: 'Producing Education',
  title: '???'
};
