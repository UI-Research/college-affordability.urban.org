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
      height: 200,
      offset: 25
    };
  },
  render: function() {
    let anchor = null,
        placeholder = null;
    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }
    if (this.props.placeholder) {
      placeholder = this.props.placeholder;
    }

    return (
    <ReactLazyLoad height={this.props.height} throttle={true} offset={this.props.offset} placeholder={placeholder}>
      <div className="lazy-loaded">
        {anchor}
        <ReactCSSTransitionGroup key="1"
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={750}
          transitionEnter={false}
          transitionLeave={false}>
          {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    </ReactLazyLoad>
    );
  }
});

module.exports = LazyLoad;
