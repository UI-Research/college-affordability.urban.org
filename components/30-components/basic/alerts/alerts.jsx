'use strict';

import React, { Component, } from 'react';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./alerts.scss');
}

export class Alert extends Component {
  render() {
    return (
      <div className="c-recent__alerts__alert">
        {this.props.children}
      </div>
    )
  }
}

export default class Alerts extends Component {
  render() {
    return (
      <div className="c-recent__alerts">
        {this.props.children}
      </div>
    )
  }
};
