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
        <a href={this.props.href}><img src={this.props.imgSrc} /></a>
        {this.props.children}
      </li>
    );
  }
}
StudentProfile.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string.isRequired
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
