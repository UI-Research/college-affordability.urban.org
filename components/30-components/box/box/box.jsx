'use strict';
const React = require('react');
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
    // Create unique ID for element.
    this.id = 'box-' + util.uniqueID();
    this.setState({
      expanded: true,
      showToggle: true
    });
  },
  componentDidMount: function() {
    // Keep track of the actual rendered height.
    let box = document.getElementById(this.id);
    let children = box.getElementsByClassName('inner');
    if (children.length) {
      let showToggle = children[0].offsetHeight > 250;
      this.setState({
        height: children[0].offsetHeight,
        showToggle: showToggle
      });
      // Toggle the state to be collapsed.
      this._toggleBox();
      this.render();
    }
  },
  render: function() {
    let anchor = '';
    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }
    let toggleClass = 'c-text__box';
    let readMore = null;
    if (this.state.showToggle) {
      toggleClass += this.state.expanded ? ' expanded' : ' collapsed';
      let toggleText = this.state.expanded ? '-' : '+';
      readMore = <div className="read-more"><a href="#" onClick={this._handleClick} className="toggle">{toggleText}</a></div>;
    }
    
    return (
      <div id={this.id} className={toggleClass}>
        {anchor}
        <div className="inner">
          {this.props.children}
        </div>
        {readMore}
      </div>
    );
  },
  _handleClick: function (e) {
    e.preventDefault();
    this._toggleBox();
  },
  // This is its own function so we can invoke with a dom event.
  _toggleBox() {
    let box = document.getElementById(this.id);
    let children = box.getElementsByClassName('inner');
    // Set to the real height when toggling to expanded.
    if (!this.state.expanded && children.length) {
      children[0].style.height = this.state.height;
    }
    else if (children.length) {
      children[0].style.height = null;
    }
    this.setState({
      expanded: !this.state.expanded
    });
  }
});

module.exports = Box;
