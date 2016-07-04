'use strict';

const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./student-profiles.scss');
}

const StudentProfiles = React.createClass({
  propTypes: {
    src: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      src: ''
    };
  },
  render: function() {
    return (
      <div className="c-student__profiles">
        <div className="c-student__profiles__inner">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = StudentProfiles;
