'use strict';
const React = require('react');
const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./faq.scss');
}

const Question = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      text: 'Question'
    };
  },
  render: function() {
    return (
      <h3 className="c-faq__set__question">{this.props.text}</h3>
    );
  }
});

const Answer = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      text: 'Answer'
    };
  },
  render: function() {
    return (
      <div className="c-faq__set__answer">{this.props.text}</div>
    );
  }
});

const FAQ = React.createClass({
  propTypes: {
    title: React.PropTypes.string,

    set: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      title: '',

      set: []
    };
  },
  render: function() {
    return (
      <div className="c-faq">
        <h2>{this.props.title}</h2>
        <div className="c-faq__set">
        {this.props.set.map(function(result) {
          return (
            <div key={result.q}>
              <Question text={result.q} />
              <Answer text={result.a} />
            </div>
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = FAQ;
