'use strict';

const React = require('react'),
      BaseGraph = require('30-components/graphs/base/base.jsx'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./bar.scss');
}

const BarGraph = React.createClass({
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
      <BaseGraph title={this.props.title} type="bar" file={this.props.file} />
    </LazyLoad>
    );
  }
});

module.exports = BarGraph;
