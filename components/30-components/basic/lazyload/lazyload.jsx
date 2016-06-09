'use strict';

const React = require('react'),
      ReactCSSTransitionGroup = require('react-addons-css-transition-group');

//react-lazyload doesn't support require().
import ReactLazyLoad from 'react-lazyload';

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./lazyload.scss');
}

const LazyLoad = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    offset: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      height: 350,
      offset: -75,
    };
  },
  render: function() {    
    return (
    <ReactLazyLoad height={this.props.height} throttle={100} offset={this.props.offset}>
      <ReactCSSTransitionGroup key="1"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnter={false}
        transitionLeave={false}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    </ReactLazyLoad>
    );
  }
});

module.exports = LazyLoad;
