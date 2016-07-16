'use strict';
import React, { Component } from 'react';
import Graph from '30-components/graphs/graph/graph.jsx';
import _ from 'lodash';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./multiples.scss');
}

export default class Multiples extends Component {
  render() {
    const graphSet = _.map(this.props.children, (component) => {
      if (component.type.name == "Graph") {
        return (
          <div className="c-graph-multiple" key={util.uniqueID()}>
            <Graph file={component.props.file} simple="asdf" />
          </div>
        );
      }
    });

    return (
      <div className="c-graph-multiples">
        {graphSet}
        <div className="clear" />
      </div>
    );
  }
}

Multiples.propTypes = {
  section: React.PropTypes.string,
  title: React.PropTypes.string
};
Multiples.defaultProps = {
  section: 'Producing Education',
  title: '???'
};
