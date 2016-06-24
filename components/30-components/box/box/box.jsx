'use strict';
const React = require('react'),
      ReactDom = require('react-dom');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./box.scss');
}

const Box = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: ''
    };
  },
  componentWillMount() {
    this.setState({
      expanded: true,
      showToggle: true,
      reload: false
    });
  },
  componentDidMount: function() {
    this._initializeBox();
  },
  componentWillReceiveProps: function (nextProps) {
    // If we got new props, reset states and force reload.
    if (!util.isEqual(this.props, nextProps)) {
      this.setState({
        reload: true,
        expanded: true,
        showToggle: true,
      });
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    // If we're set to reload, intialize for the new content.
    if (this.state.reload) {
      this._initializeBox();
    }
  },
  _handleClick: function (e) {
    e.preventDefault();
    this._toggleBox();
  },
  // Initialize our states and start collapsed if needed.
  _initializeBox() {
    let box = this.refs.box;
    let children = box.getElementsByClassName('inner');
    if (children.length) {
      let showToggle = children[0].offsetHeight > 250;
      this.setState({
        expanded: true,
        height: children[0].offsetHeight,
        showToggle: showToggle,
        reload: false
      });
      // Toggle the state to be collapsed.
      this._toggleBox();
    }
  },
  // This is its own function so we can invoke with a dom event.
  _toggleBox() {
    let box = this.refs.box;
    let children = box.getElementsByClassName('inner');
    // Set to the real height when toggling to expanded.
    if (!this.state.expanded && children.length) {
      children[0].style.height = 'auto';
    }
    else if (children.length) {
      children[0].style.height = null;
    }
    this.setState({
      expanded: !this.state.expanded
    });
  },
  render: function() {
    let anchor = '',
        toggleClass = 'c-text__box',
        readMore = null;
    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }
    if (this.state.showToggle) {
      toggleClass += this.state.expanded ? ' expanded' : ' collapsed';
      let toggleText = this.state.expanded ? '-' : '+';
      readMore = <div className="read-more"><a href="#" onClick={this._handleClick} className="toggle">{toggleText}</a></div>;
    }
    
    return (
      <div ref="box" className={toggleClass}>
        {anchor}
        <div className="inner">
          {this.props.children}
        </div>
        {readMore}
      </div>
    );
  }
});

module.exports = Box;
