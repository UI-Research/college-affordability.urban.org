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
    // this.props.children.forEach(function(obj){
    //   obj.props.file.size = { "height" : 900 }
    // })
    var children = this.props.children.length
    const graphSet = _.map(this.props.children, (component) => {
      var newComponent = component
      newComponent.props["children"] = children
      var childClass = "c-graph-multiple children_"+String(children)
      return (
        <div className={childClass} key={util.uniqueID()}>
          {newComponent}
        </div>
      );
    });
    var notes = (this.props.notes == "") ? undefined : <GraphAttribution type="notes" text={this.props.notes} /> 
    var source = (this.props.source == "") ? undefined : <GraphAttribution type="source" text={this.props.source} />

//Draw only 1 legend (not one per multiple)
//ASSUMPTION: all multiples share same series and therefore color scheme
    var series = this.props.children[0].props.file.series;
    var colors;
//If colors are defined in the json, use those in the legend, otherwise use default colors and color order
    if (typeof(this.props.children[0].props.file.data.colors) == "undefined"){
      colors = [
          '#1696d2',
          '#000000',
          '#fdbf11',
          '#55b748',
          '#d2d2d2',
          '#ec008b'
        ]
    }else{
      colors = this.props.children[0].props.file.data.colors;
    }
    var legend;
    if(typeof(series) == "string" || typeof(series) == "undefined"){
      legend = []
    }else{
      legend = [] 
      for(var i = 0; i< series.length; i++){
        var colorStyle = { "background-color": colors[series[i]]}
        legend.push(<div className="small-multiple-legend-item"><span className="small-multiple-legend-key" style={colorStyle}></span><span className="small-multiple-legend-text">{series[i]}</span></div>)
      }
    }
    return (
      <div className="c-graph-multiples">
      <h2>{this.props.title}</h2>
      <div className="small-multiple-legend-container"><div className="small-multiple-legend">{legend}</div></div>
        {graphSet}
        <div className="c-text__caption c-text__caption--bottom">
          <div className="c-text__viz-notes">
            {source}
            {notes}
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
