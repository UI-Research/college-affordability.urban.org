'use strict';
const React = require('react');

const Box = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    anchor_name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      type: '',
      anchor_name: 'box',
    };
  },
  render: function() {
    let type_class = 'box';
    switch (this.props.type.toLowerCase()) {
      case 'faq':
        type_class = 'box-faq';
        break;
      case 'factoid':
        type_class = 'box-factoid';
        break;
    }
    
    let anchor_name = this.props.anchor_name.replace(/ /g,"_");
    
    return (
      <div className="box-container">
        <a name={anchor_name}></a>
        <div className={type_class}>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = Box;
