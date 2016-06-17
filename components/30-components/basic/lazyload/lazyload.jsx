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
    anchor_name: React.PropTypes.string,
    height: React.PropTypes.number,
    offset: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      anchor_name: '',
      height: 367,
      offset: 25
    };
  },
  render: function() {
    let placeholder_element = '';
    if (this.props.anchor_name) {
      placeholder_element = <a name={this.props.anchor_name}></a>;
    }

    return (
    <ReactLazyLoad height={this.props.height} throttle={true} offset={this.props.offset} placeholder={placeholder_element}>
      <div className="lazy-loaded">
        <ReactCSSTransitionGroup key="1"
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={750}
          transitionEnter={false}
          transitionLeave={false}>
          {placeholder_element}
          {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    </ReactLazyLoad>
    );
  }
});

module.exports = LazyLoad;
