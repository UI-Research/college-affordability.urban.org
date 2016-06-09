'use strict';

const React = require('react'),
      BaseGraph = require('30-components/graphs/base/base.jsx'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./line.scss');
}

const LineGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  render: function() {
    return (
    <LazyLoad>
      <BaseGraph title={this.props.title} type="line" file={this.props.file} />
    </LazyLoad>
    );
  }
});

module.exports = LineGraph;
