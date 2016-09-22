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
    // log this
    var children = this.props.children.length
    const graphSet = _.map(this.props.children, (component) => {
      // log this
      // component.props.children = children
      var x = component
      x.props["children"] = children

      var foo = "c-graph-multiple children_"+String(children)
      return (
        <div className={foo} key={util.uniqueID()}>
          {x}
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
