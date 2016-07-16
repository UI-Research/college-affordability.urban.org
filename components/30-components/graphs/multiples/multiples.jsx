'use strict';
import React, { Component } from 'react';
import { GraphAttribution } from '30-components/graphs/graph/graph.jsx';
import _ from 'lodash';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./multiples.scss');
}

export default class Multiples extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const graphSet = _.map(this.props.children, (component) => {
      return (
        <div className="c-graph-multiple" key={util.uniqueID()}>
          {component}
        </div>
      );
    });

    return (
      <div className="c-graph-multiples">
      <h2>{this.props.title}</h2>
        {graphSet}
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            <GraphAttribution type="source" text={this.props.source} />
            <GraphAttribution type="notes" text={this.props.notes} />
          </div>
        </div>
      </div>
    );
  }
}

Multiples.propTypes = {
  title: React.PropTypes.string,
  source: React.PropTypes.string,
  notes: React.PropTypes.string
};
Multiples.defaultProps = {
  title: 'Sample Multiples',
  source: '',
  notes: ''
};
