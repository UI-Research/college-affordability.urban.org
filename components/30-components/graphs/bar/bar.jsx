'use strict';

const React = require('react'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');

const util = require('util.jsx');

if (util.canUseDOM()) {
  require('./bar.scss');
}

// Keep graphing piece separate - need its own DOM interaction events.
const BaseGraph = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: '',
      type: 'bar'
    };
  },
  componentWillMount() {
    // Create unique ID for element.
    this.id = this.props.type + 'Graph' + util.uniqueID();
  },
  componentDidMount: function() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;

      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.id;

      // Force specify type of graph.
      data.data.type = this.props.type;

      // Set default colors.
      if (!data.color) {
        data.color = {
          pattern: [
            '#1696d2',
            '#ec008b',
            '#d2d2d2'
          ]
        };
      }

      // Show tooltip.
      data.tooltip = {
        show: true
      };

      c3.generate(data);
    }
  },
  raw: function(string) {
    if (this.props.file.metadata[string]) {
      return { __html: this.props.file.metadata[string] };
    }
    else {
      return { __html: '' };
    }
  },
  render: function() {
    return (
      <div className="c-bar">
        <h1>{this.props.title}</h1>
        <div id={this.id} className="c-bar__container"></div>
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            <div>
              <strong className="c-text__viz-notes__title">Source:</strong>
              <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw("source")} />
            </div>
            <div>
              <strong className="c-text__viz-notes__title">Notes:</strong>
              <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw("notes")} />
            </div>
            <div>
              <strong className="c-text__viz-notes__title">Data:</strong>
              <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={this.raw("data")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const BarGraph = React.createClass({
  propTypes: {
    anchor_name: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      anchor_name: '',
      title: ''
    };
  },
  render: function() {
    return (
    <LazyLoad anchor_name={this.props.anchor_name}>
      <BaseGraph title={this.props.title} type="bar" file={this.props.file} />
    </LazyLoad>
    );
  }
});

module.exports = BarGraph;
