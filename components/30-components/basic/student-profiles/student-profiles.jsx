'use strict';

import React, { Component, PropTypes } from 'react';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./student-profiles.scss');
}

export class StudentProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <a href={this.props.href} className="c-student__profiles__link">
        <div className="c-student__profiles__icon"></div>
        <div className="c-student__profiles__title">{this.props.title} <i className="fa fa-chevron-right"></i></div>
        </a>
      </li>
    );
  }
}
StudentProfile.propTypes = {
  href: PropTypes.string
};
StudentProfile.defaultProps = {
  href: '#'
};


export default class StudentProfiles extends Component {
  render() {
    return (
      <div className="c-student__profiles">
        <div className="c-student__profiles__inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}
