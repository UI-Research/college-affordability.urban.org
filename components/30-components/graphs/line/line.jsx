'use strict';

const React = require('react'),
      BaseGraph = require('30-components/graphs/base/base.jsx'),
      ReactCSSTransitionGroup = require('react-addons-css-transition-group');

//react-lazyload doesn't support require().
import LazyLoad from 'react-lazyload';

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
    <LazyLoad height={350} throttle={100} offset={-100}>
      <ReactCSSTransitionGroup key="1"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnter={false}
        transitionLeave={false}>
        <BaseGraph title={this.props.title} type="line" file={this.props.file} />
      </ReactCSSTransitionGroup>
    </LazyLoad>
    );
  }
});

module.exports = LineGraph;
