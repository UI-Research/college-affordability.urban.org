'use strict';
import React, { Component } from 'react';
import { GraphAttribution } from '30-components/graphs/graph/graph.jsx';
import Actions from '30-components/basic/actions/actions.jsx';
import ActionButton from '30-components/basic/action_button/action_button.jsx';
import _ from 'lodash';
import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./multiples.scss');
}
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

  function createMultipleCSV(objects) {
    // Create CSV objects based off of arrays.
    const toCSV = (dataObjs) => {
      // let dataObj = jQuery.extend(true, {}, oldDataObj);
      let arr;
      let cats = dataObjs[0].props.file.axis.x.categories.slice(0)
      cats.unshift("data_category")
      cats.unshift("data_set")
      let s ='';
      _.each(dataObjs, (dataObj, dataInd) => {
        arr = dataObj.props.file.data.columns.slice(0)
        if(dataInd == 0){
          arr.unshift(cats)
        }

        
        _.each(arr, (object) => {
          let tmp;
          if(object[0] == "data_set"){
            tmp = []
          }else{
            tmp = [dataObj.props.file.title]
          }
          object.forEach(function(o){
            if(typeof(o) == "string"){
              tmp.push("\"" + o.replace(/–/g,"-") + "\"")
            }else{
              tmp.push(o)
            }
          })
            s += tmp.join(',');
            s += '\r\n';          
          
        });
      });

      return encodeURIComponent(s);
    };

    // Generate link for CSV download.
      let encodedUri = 'data:Application/octet-stream,' + toCSV(objects);
      // d3.select(`.c-${object.props.id}-container a.button-download_data__csv_`)
        // .attr('href', encodedUri)
        // .attr('download', `${util.machineName(object.props.file.title)}.csv`);
      return encodedUri
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
    var fileName = util.machineName(this.props.title) + ".csv"
    var downloadLink = createMultipleCSV(this.props.children)
    var img_href = "\/img\/" + util.machineName(this.props.title) + ".png"
    var action_buttons = (
        <Actions>
          <ActionButton title='Save Image' href={img_href} />
          <ActionButton title='Download data (csv)' href={downloadLink} download= {fileName} disable='false'/>
        </Actions>
      );
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
        var colorStyle
        if (typeof(this.props.children[0].props.file.data.colors) != "undefined"){
          colorStyle = { "background-color": colors[series[i]]}
        }else{
          colorStyle = { "background-color": colors[i]}
        }
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
        {action_buttons}

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
