'use strict';

import React, { Component } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import Actions from '30-components/basic/actions/actions.jsx';
import ActionButton from '30-components/basic/action_button/action_button.jsx';
import LazyLoad from '30-components/basic/lazyload/lazyload.jsx';

import util from 'util.jsx';
import formatting from 'formatting.jsx';

if (util.canUseDOM()) {
  require('./graph.scss');
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

// Keep graphing piece separate - need its own DOM interaction events.
export class BaseGraph extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (util.canUseDOM) {
      const c3 = require('c3');

      // Acquire graph data.
      let data = this.props.file;


      // Identify DOM element we want to apply the graph to.
      data.bindto = '#' + this.props.id;

      //add a blank data point at the end of line/area charts to avoid cut of
      //If/when this issue https://github.com/UI-Research/college-affordability.urban.org/issues/153
      // is resolved, should add a test to not add extra point if end of col == null 
      if (_.includes(['line', 'area'], data.data.type) && !data.data.sets && !data.overrideTickCount) {
        data.axis.x.categories.push("")
        data.axis.x.categories.unshift("")
        data.data.columns.forEach(function(arr){
          arr.push(null)
          arr.splice(1, 0, null)
        })
        data.axis.x.padding = {"left" : 100, "right": 100}
      }
      if( (data.data.type == "bar" && data.axis.x.categories.length > 20) || (!data.data.sets && data.axis.rotated == true && data.data.type == "bar" && data.data.columns.length > 1 && !data.data.groups && ( data.data.columns.length * data.axis.x.categories.length ) > 19 )  || data.forceTall == true){
        data.size = { "height" : 900}
      }

      if(typeof(data.highlightIndex) != "undefined"){
        data.data.color = function(color, d) {
            return d.index === data.highlightIndex ? "#000" : "#1696d2";
        }
      }

      // Set max number of axis ticks on y axis
      // TODO: There is a bug that's not allowing C3 to align the values correctly.
        // We can't tap into this feature until it gets fixed on their end.
      // if (data.axis && data.axis.y && data.axis.y.tick && !data.axis.y.tick.count) {
      //  data.axis.y.tick.count = 10;
      //  data.axis.y.tick.fit = true;
      // }

      // Detect any possible instances of the key 'format' and convert it into the specified format.
      if (data.data && data.data.labels && data.data.labels.format) {
        // Account for per set, or one global formatting.
        if (_.isObject(data.data.labels.format)) {
          _.each(data.data.labels.format, (entry, index) => {
            // Check if we've already processed this.
            if (!_.isFunction(entry)) {
              data.data.labels.format[index] = formatting.f(entry, true, 'label', data);
            }
          });
        }
        else {
          if (!_.isFunction(data.data.labels.format)) {
            data.data.labels.format = formatting.f(data.data.labels.format, true, 'label', data);
          }
        }
      }

      // Hide tooltip.
      if(!data.hideTooltip){
        data.tooltip = {
          show: true
        };
      }else{
        data.tooltip = {
          show: false
        };    
      }

      //for stacked bar chart, make stack order same as series order (not sorted asc/desc)
      if(data.data.groups){
        data.data.order = null
      }


      // Apply formatting functions to axis labels.
      if (data.axis) {
        if (data.axis.x && data.axis.x.tick && data.axis.x.tick.format) {
          if (!_.isFunction(data.axis.x.tick.format)) {
            data.axis.x.tick.format = formatting.f(data.axis.x.tick.format, true, 'axis');
          }
        }
        if (data.axis.y && data.axis.y.tick && data.axis.y.tick.format) {
          if (!_.isFunction(data.axis.y.tick.format)) {
            if(data.tooltip){
              data.tooltip.format = {}
              data.tooltip.format.value = formatting.f(data.axis.y.tick.format, true, 'tooltip', data)
            }
            data.axis.y.tick.format = formatting.f(data.axis.y.tick.format, true, 'axis');
          }
        }
        if (data.axis.y2 && data.axis.y2.tick && data.axis.y2.tick.format) {
          if (!_.isFunction(data.axis.y2.tick.format)) {
            data.axis.y2.tick.format = formatting.f(data.axis.y2.tick.format, true, 'axis');
          }
        }
      }


      // Relocate the x axis to the bottom outer center of the graph.
      // We expect implementers to assign a string to data.axis.x.label.
      // e.g.
      // ...
      // axis {
      //   x {
      //     label: "My x axis label"
      //   }
      // }
      // }
      if (data.axis && data.axis.rotated && data.axis.y && data.axis.y.label && typeof data.axis.y.label === 'string') {
        data.axis.y.label = {
          text: data.axis.y.label,
          position: 'outer-center'
        };
      }
      if (data.axis && data.axis.x && data.axis.x.label && typeof data.axis.x.label === 'string') {
        data.axis.x.label = {
          text: data.axis.x.label,
          position: 'outer-center'
        };
      }

      // Increase height to prevent x label from overlapping labels
      if (data.axis && !data.axis.rotated && data.axis.x && !data.axis.x.height) {
        data.axis.x.height = 80;
      }

      // Always have the y axis start at 0
      if (data.axis && data.axis.y && !data.axis.y.padding) {
        data.axis.y.padding = {
          top: 50,
          bottom: 50
        };

        let negative = false;
        _.each(data.data.columns, (c) => {
          _.each(c, (v) => {
            if (typeof v == 'number' && v < 0) {
              negative = true;
              return false;
            }
          });
          if (negative) {
            return false;
          }
        });

        // If all values are positive, force axis to start at 0 per requirement.
        if (!negative) {
          data.axis.y.min = 0;
          data.axis.y.padding.bottom = 0;
        }
      }

      if (data.axis && data.axis.x && !data.axis.x.padding) {
        data.axis.x.padding = {
          left: 0,
          right: 0.3
        };
      }

      // Relocate legend to top of the graph.
      if (!data.legend) {
        data.legend = {
          position: 'bottom',
          item: {
            onclick: function () { return false; }
          }
        };
      }

      // Hide data points on area graphs
      if (data.data.type && data.data.type === 'area') {
        data.point = {
          show: false
        };
      }

      if (_.includes(['line', 'area'], data.data.type)) {
        // Line and area graphs should not show data points.
        data.data.labels = false;

        // Line and area graphs must flush to left and right,
        // but show start/end points.
        if (data.data.type == 'line' ) {
          if (data.axis && data.axis.x) {
            if (data.axis.x.type == 'indexed') {
              data.axis.x.padding = {
                left: 0.15,
                right: 0.3
              };
            }
            else {
              data.axis.x.padding = {
                left: -0.35,
                right: -0.3
              };
            }
          }
        }
        // Adjust area graphs to have 'no' padding.
        else {
          // Small don't need adjustment.
          if (this.props.small == 'true') {
            data.axis.x.padding.right = 0;
          }
          // Normal size need a negative.
          else {
            data.axis.x.padding = {
              left: -0.4,
              right: -0.3
            };
          }
        }
      }
      else if (data.data.type == 'bar' && data.axis && data.axis.x && data.axis.x.type == 'indexed') {
        data.axis.x.padding = {
          left: 0.35,
          right: 0.4
        };
      }

      let gridBaseVal;
      if(data.axis.y.min && data.axis.y.min > 0){
        gridBaseVal = data.axis.y.min
      }else{
        gridBaseVal = 0;
      }
      // Show grid lines by default
      if (!data.grid) {
        data.grid = {};
        // This we enable by default for most graphs.
        if (!data.grid.y) {
          data.grid.y = {
            show: 'true',
            // Make 0 on the y axis the base line.
            // In most cases, this gridline will sit nicely
            // on the axis itself...unless there are negative values
            // in the dataset... in which case we intentionally want
            // the black line to cut in the middle of the canvas
            // to prove where the 0 value is.
            lines: [{
              value: gridBaseVal,
              class: 'grid-base'
            }]
          };
        }
      }


      // Set default colors.
      data.color = {
        pattern: [
          '#1696d2',
          '#000000',
          '#fdbf11',
          '#55b748',
          '#d2d2d2',
          '#ec008b'
        ]
      };

      // If sets are available but columns aren't, attempt to
      // set the graph's initial data with the first set.
      if (data.data.sets) {
        if (!data.data.columns) {
          let first = _.keys(data.data.sets)[0];
          let dataset = (typeof data.data.sets[first][1] == 'object') ? data.data.sets[first][1] : data.data.sets[first];
          data.data.columns = dataset;
        }
      }

      // We're doing a lot of hacks post-chart generation.
      // So we need to just slash the chart and force it to
      // regenerate.
      data.onresized = () => {
        chart.destroy();
        this.checkVerticalLabels();
        chart = c3.generate(data);
        this.polishChart(this);
      };


      // If small flag is set on <Graph />,
      // apply special formatting for small graph sizes!
      if (this.props.small == 'true') {
        data.legend.show = false;

        var width = (this.props.children == 2 || this.props.file.wideSmallMultiple == true) ? 335 : 210;
        var height = (this.props.file.tallSmallMultiple == true) ? 335 : 210;
        data.padding = {"top": 10}
        if(data.data.type == "bar" && data.axis.rotated == true){
          data.padding = {"right" : 20, "bottom" : 20}
        }
        else if(data.data.type == "bar" && data.axis.rotated != true){
           data.padding = {"top": 10, "bottom": 25}
        }else{
          data.padding = {"top": 10}
        }
        if(!data.size){
            data.size = { "width" : width, "height": height}
        }else{
            data.size.width = width
            data.size.height = height
        }

        // Reset height of x-axis declared previously.
        data.axis.x.height = 10;

        // Hide points, especially on area graphs.
        if (!data.point) {
          data.point = {};
        }
        if (!data.point.show) {
          data.point.show = false;
        }
      }

      // Generate the graph!
      this.checkVerticalLabels();
      let chart = c3.generate(data);


      // Make it available to other scopes.
      const polishChart = this.polishChart;
      polishChart(this);

      // If sets are available, reveal them as options
      if (data.data.sets) {
        let sets = data.data.sets;

        let swapSet = () => {
          chart.destroy();
          this.checkVerticalLabels();

          // Toggles the dataset chosen from the dropdown.
          let target = d3.select(`${data.bindto}_dropdown select`).property('value');
          let dataset = (typeof sets[target][1] == 'object') ? sets[target][1] : sets[target];
          data.data.columns = dataset;

          chart = c3.generate(data);
          this.polishChart(this);
        };

        // Create select box for toggles
        let options = d3.select(`${data.bindto}_dropdown`);
        let select = options.append('select')
          .attr('class', 'select')
          .on('change', swapSet);

        _.map(data.data.sets, (set, index) => {
          let dropdown_label = (typeof set[0] == 'object') ? set[0][0] : set[0];
          select.append('option')
            .attr('class', util.machineName(index))
            .attr('value', index)
            .text(dropdown_label);
        });
      }
    }
  }
  polishChart(object) {
    const setLegend = object.setLegend;
    setLegend(object);
    const setTick = object.setTick;
    setTick(object);
    const moveAxisLabel = object.moveAxisLabel;
    moveAxisLabel(object);
    const lineChartFormatting = object.lineChartFormatting;
    lineChartFormatting(object);
    const barChartFormatting = object.barChartFormatting;
    barChartFormatting(object);
    const formatDataLabel = object.formatDataLabel;
    formatDataLabel(object);
    const createCSV = object.createCSV;
    createCSV(object);
    const resizeLegend = object.resizeLegend;
    resizeLegend(object);
  }
  createCSV(object) {
    // Create CSV objects based off of arrays.
    const toCSV = (dataObj) => {
      // let dataObj = jQuery.extend(true, {}, oldDataObj);
      let arr;
      let cats = dataObj.axis.x.categories.slice(0)
      if(dataObj.data.sets){
        arr = []
        let sets = dataObj.data.sets
        let set;
        let setLen;
        for (var key in sets){
          set = sets[key].slice(0)
          if(set.length != 1){
            setLen = set[1][0].length
            for(var i = 0; i < set[1].length; i++){
              arr.push([set[0]].concat(set[1][i]))
            }
          }else{
            setLen = set[0].length
            arr.push([""].concat(set[0]))
          }
        }
        arr.unshift(["data_set","data_category"].concat(cats.slice(0,setLen-1)))
      }else{
        cats.unshift("data_category")
        arr = dataObj.data.columns.slice(0)
        arr.unshift(cats)
      }

      let s ='';
      _.each(arr, (object) => {
        let tmp = []
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

      return encodeURIComponent(s);
    };

    // Generate link for CSV download.
    if(d3.select(d3.select(`#${object.props.id}`).node().parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).classed("c-graph-multiple") == false){
      let encodedUri = 'data:Application/octet-stream,' + toCSV(object.props.file);
      d3.select(`.c-${object.props.id}-container a.button-download_data__csv_`)
        .attr('href', encodedUri)
        .attr('download', `${util.machineName(object.props.file.title)}.csv`);
    }
  }
  getTimeSeriesCount(allVals, count){
    if(allVals.length <= count){
      return allVals.length;
    }
    var total = allVals.length;
    for(var c = count; c > 0; c--){
      for (var s = 1; s< 20; s++){
        if(total -1 == (c-1)*(s+1)){
          if(c != 2){
            return c
          }else{
            // return allVals.length;
            return c
          }
        }
      }
    }
    return allVals.length
  }
  getTickValues(dataVals, count, groups, inMin, inMax){
    if(typeof(groups) == "undefined"){
      var max = d3.max(dataVals, function(array) {
        return d3.max(array.filter(function(d){ return !isNaN(parseFloat(d))}));
      });
      var min = d3.min(dataVals, function(array) {
        return d3.min(array.filter(function(d){ return !isNaN(parseFloat(d))}));
      });
      min = d3.min([0,min])
      // var scale = d3.scale.linear().domain([min,max]).nice();
      // return scale.ticks(count)
    }else{
      var reshaped = {}
      for(var i = 0; i < dataVals.length; i++){
        reshaped[ dataVals[i][0] ]= []
        for(var j = 1; j < dataVals[i].length; j++){
          reshaped[ dataVals[i][0] ].push( dataVals[i][j] )
        }
      }
      var totals = []
      for(var p = 0; p < reshaped[ groups[0][0] ].length; p++){
        totals.push(0)
      }
      var increment;
      for(var k = 0; k < groups[0].length; k++){
        for(var l = 0; l < reshaped[ groups[0][0] ].length; l++){
          if( !isNaN( reshaped[ groups[0][k] ][l] )){
            totals[l] += parseFloat(reshaped[ groups[0][0] ][l])  
          }
          
        }
      }
      totals.push(0)
      var max = d3.max(totals);
      var min = d3.min(totals);
    }
//for small multiples, max value should be defined in json (so all small multiples on same scale)
    if(typeof(inMax) != "undefined"){
      max = inMax;
    }
    if(typeof(inMin) != "undefined"){
      min = inMin;
    }
    var scale = d3.scale.linear().domain([min,max]).nice();
    return scale.ticks(count)
  }

  checkVerticalLabels() {
    // Make bottom axis labels vertical for tablet/mobile.
    const width = window.innerWidth;
    let data = this.props.file;
    if (!data.axis.rotated) {
      if (data.axis.x) {
        if (!data.axis.x.tick) {
          data.axis.x.tick = {};
        }
        var ticks = (this.props.small == 'true') ? 4 : 8
        
//for small multiples, max value should be defined in json (so all small multiples on same scale)
//As fall back, get ticks

        //for now, use default tick values for toggle charts
        if(typeof(data.sets) != "undefined"){
          data.axis.y.tick.values = this.getTickValues(data.data.columns, ticks, data.data.groups, this.props.file.axis.y.min, this.props.file.axis.y.max);
        }
        
        if( (data.data.type == "line" || data.data.type == "area") && !data.data.sets && !data.overrideTickCount){
          data.axis.x.tick.count = this.getTimeSeriesCount(data.axis.x.categories, 13);
        }
        if (data.axis.x.type == 'category' && width <= util.breakpointWidth('mid')) {
          data.axis.x.tick.rotate = 20;
          data.axis.x.tick.multiline = false;
          if (data.axis.x.padding && data.axis.x.padding.right && data.axis.x.padding.right < 0) {
            data.axis.x.padding.right = 0;
          }
        }
        else {
          data.axis.x.tick.rotate = 0;
          data.axis.x.tick.multiline = true;
        }
      }
    }
    else {
      if (data.axis.y) {
        if (!data.axis.y.tick) {
          data.axis.y.tick = {};
        }
        var ticks = (this.props.small == 'true') ? 4 : 8
        
//for small multiples, max value should be defined in json (so all small multiples on same scale)
//As fall back, get ticks


        //for now, use default tick values for toggle charts
        if(typeof(data.sets) != "undefined"){
          data.axis.y.tick.values = this.getTickValues(data.data.columns, ticks, data.data.groups, this.props.file.axis.y.min, this.props.file.axis.y.max);
        }

        if (width <= util.breakpointWidth('mid')) {
          data.axis.y.tick.rotate = 20;
          data.axis.y.tick.multiline = false;
          if (data.axis.y.padding && data.axis.y.padding.right && data.axis.y.padding.right < 0) {
            data.axis.y.padding.right = 0;
          }
        }
        else {
          data.axis.y.tick.rotate = 0;
          data.axis.y.tick.multiline = true;
        }
      }
    }
  }
  static stylesToObject(style) {
    // Break style attributes into an array;
    var styles = style.split(';');
    var style_array = {};
    // Build array for styles.
    for (var i = 0; i < styles.length; i++) {
      var single_style = styles[i].split(':');
      if (single_style[0].trim() && single_style[1].trim()) {
        style_array[single_style[0].trim()] = single_style[1].trim();
      }
    }
    return style_array;
  }
  setLegend(object) {
    // Clean up (just in case);
    d3.select(`#${object.props.id}_legend`).selectAll('*').remove();

    let legend = d3.selectAll(`#${object.props.id} .c3-legend-item`);
    // If there's only one data set, don't bother listing the legend.
    //Hide legend for small multiples, if needed it's drawn by the component (1 per group of multiples)
    if (legend[0].length <= 1 || d3.select(d3.select(`#${object.props.id}`).node().parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).classed("c-graph-multiple") == true) {
      legend.remove();
    }
    else {
      // Set up the legend above the graph
      let svg = d3.select(`#${object.props.id}_legend`)
        .append('svg')
        .attr('width', '100%');
      legend.each(function() {
        svg.node().appendChild(this);
      });
    }

  }
  resizeLegend(object){
    let svg = d3.select(`#${object.props.id}_legend`)
    let gs = svg.selectAll("g")
    var bottoms = []
    gs.each(function(){
      bottoms.push(this.getBoundingClientRect().bottom)
    })
    if(bottoms.length != 0){
      svg.select("svg").style("height", function(){
        if(Math.abs(Math.max.apply(null, bottoms)-Math.min.apply(null, bottoms)) < 1){
          return "40px"
        }else{
          return 2*Math.abs(Math.max.apply(null, bottoms)-Math.min.apply(null, bottoms)) + "px"
        }
      });
    }

    
  }
  moveAxisLabel(object) {
    // Transform Y axis to not be so vertical...
    let data = object.props.file;

    // TODO: This should probably be a util/helper method.
    // For now, it's only used for this purpose.
    d3.selection.prototype.last = function() {
      var last = this.size() - 1;
      return d3.select(this[0][last]);
    };

    if (data.axis) {
      if (!data.axis.rotated && data.axis.y && data.axis.y.label) {
        // Create container for y axis
        const container = d3.select(`#${object.props.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate y axis label
        const y_axis_label = d3.selectAll(`#${object.props.id} .c3-axis-y .c3-axis-y-label`)
          .attr('transform', 'rotate(0)')
          .attr('style', 'text-anchor: start')
          .attr('dx', '0');
        // Move it over to new container
        y_axis_label.each(function() {
          container.node().appendChild(this);
        });
      }

      if (data.axis.rotated && data.axis.x && data.axis.x.label) {
        // Create container for x axis
        const container = d3.select(`#${object.props.id}`).insert('svg', ':first-child')
          .attr('width', '100%')
          .attr('height', 20);
        // Fix and encapsulate x axis label
        const x_axis_label = d3.selectAll(`#${object.props.id} .c3-axis-x .c3-axis-x-label`)
          .attr('transform', 'rotate(0)')
          .attr('dy', '1em')
          .attr('style', 'text-anchor: start')
          .attr('dx', '0');
        // Move it over to new container
        x_axis_label.each(function() {
          container.node().appendChild(this);
        });
      }
    }
  }
  setTick(object) {
    // When in category mode, align the ticks to be directly on top
    // of the labels.
    if (object.props.file.axis && object.props.file.axis.x && !_.isEmpty(object.props.file.axis.x.type) && object.props.file.axis.x.type == 'category') {
      d3.selectAll(`#${object.props.id} g.c3-axis-x g.tick line`)
        .attr("x1",0)
        .attr("x2",0)
    }
  }
  lineChartFormatting(object) {
    let chart_dots = d3.selectAll(`#${object.props.id} .c3-circle`);
    chart_dots.each(function() {
      var style = d3.select(this).attr('style');
      var style_array = BaseGraph.stylesToObject(style);
      // Set color of circle stroke.
      var color = style_array['fill'];
      d3.select(this)
        .attr('r', '5')
        .attr('style', style + 'stroke: ' + color);
    });
    // Override radius change on hover.
    let hover_states = d3.selectAll('.c3-event-rect');
    hover_states.each(function() {
      // Stop event from changing circle radius.
      hover_states.on('mouseover', function() { return false; });
    });
  }
  getClosest( elem, selector ) {

    // Variables
    var firstChar = selector.charAt(0);
    var supports = 'classList' in document.documentElement;
    var attribute, value;

    // If selector is a data attribute, split attribute from value
    if ( firstChar === '[' ) {
        selector = selector.substr( 1, selector.length - 2 );
        attribute = selector.split( '=' );

        if ( attribute.length > 1 ) {
            value = true;
            attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
        }
    }

    // Get closest match
    for ( ; elem && elem !== document && elem.nodeType === 1; elem = elem.parentNode ) {

        // If selector is a class
        if ( firstChar === '.' ) {
            if ( supports ) {
                if ( elem.classList.contains( selector.substr(1) ) ) {
                    return elem;
                }
            } else {
                if ( new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test( elem.className ) ) {
                    return elem;
                }
            }
        }

        // If selector is an ID
        if ( firstChar === '#' ) {
            if ( elem.id === selector.substr(1) ) {
                return elem;
            }
        }

        // If selector is a data attribute
        if ( firstChar === '[' ) {
            if ( elem.hasAttribute( attribute[0] ) ) {
                if ( value ) {
                    if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
                        return elem;
                    }
                } else {
                    return elem;
                }
            }
        }

        // If selector is a tag
        if ( elem.tagName.toLowerCase() === selector ) {
            return elem;
        }

    }

    return null;

  }
  barChartFormatting(object) {
    let bar_cats = d3.selectAll(`#${object.props.id}.c-bar__container .c3-axis-x[style*="visibility: visible"] .tick text`);
    let legend_cats = d3.selectAll(`#${object.props.id}_legend .c3-legend-item text`);

    if(object.props.file.tallSmallMultiple == true && object.props.small == "true"){
      object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph__wrapper").classList.add("tall_mult_exception")
    }
    if(object.props.file.wideSmallMultiple == true && object.props.small == "true"){
       object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph-multiple").classList.add("children_2")
     }
    if(
      (object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph").classList.contains("c-bar") 
      &&
      object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph").classList.contains("has-legend")
      &&
      !object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph").classList.contains("c-bar-grouped")
      &&
      !object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph").classList.contains("c-bar-vertical")
      &&
      bar_cats[0].length*legend_cats[0].length > 19
      ) 
      ||
      bar_cats[0].length > 20
      ||
      object.props.file.forceTall == true){
      object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph__container").classList.add("tall_container")
      object.getClosest( d3.select(`#${object.props.id}`).node() , ".c-graph__wrapper").classList.add("tall_wrapper")
    }

    let bar_text = d3.selectAll(`#${object.props.id}.c-bar__container--grouped .c3-chart-texts .c3-text`);
    let bar_bar = d3.selectAll(`#${object.props.id}.c-bar__container--grouped .c3-chart-bar .c3-bar`);
    bar_text.each(function() {
      var style = d3.select(this).attr('style');
      var style_array = BaseGraph.stylesToObject(style);
      //get the index number of the text element in its parent group, which is the same as the index number of the corresponding bar in its group
      var indexNum = [].slice.call(this.parentNode.children).indexOf(this)
      var textColor = style_array['fill'];
      var barGroup;
      bar_bar.each(function(){
        var barStyle = d3.select(this).attr('style');
        var barStyle_array = BaseGraph.stylesToObject(barStyle);
        if(barStyle_array['fill'] == textColor){
          barGroup = this.parentNode;
          return false;
        }
      })
      var barBounds = barGroup.querySelectorAll(".c3-bar")[indexNum].getBoundingClientRect()
      var textBounds = this.getBoundingClientRect()
      //if label doesn't fit in bar slice, don't show it
      if(barBounds.width <= textBounds.width -3 || barBounds.height <= textBounds.height -3){
         d3.select(this).attr('style', style + ' fill:' + 'rgba(0,0,0,0)' + ' !important'); 
      }
      else{
        // Need to use rgb and hex for different browsers.
        var colors_light_text = [
          'rgb(22, 150, 210)',
          'rgb(0, 0, 0)',
          'rgb(236, 0, 139)',
          'rgb(85, 183, 72)',
          'rgb(92, 88, 89)',
          'rgb(219, 43, 39)',
          'rgb(132, 128, 129)',
          '#1696d2',
          '#000000',
          '#ec008b',
          '#55b748',
          '#5c5859',
          '#db2b27',
          '#848081'
        ];
        // Assign fill color to chart text.
        var is_white = colors_light_text.indexOf(textColor);
        var color = (is_white > -1) ? 'white' : 'black';
        d3.select(this).attr('style', style + ' fill:' + color + ' !important');
      }
    });
  }
  formatDataLabel(object) {
    // Data display labels for vertical bar charts.
    let data_labels_v = d3.selectAll(`.c-bar-grouped.c-bar-vertical #${object.props.id} .c3-chart-texts .c3-text`);
    data_labels_v.each(function() {
      // Add 14 pixels to the labels to move them into the stacked bars.
      var y = parseFloat(d3.select(this).attr('y')) + 13;
      d3.select(this).attr('y', y);
    });
    // Data display labels for horizontal bar charts.
    let data_labels_h = d3.selectAll(`.c-bar-grouped.c-bar-horizontal #${object.props.id} .c3-chart-texts .c3-text`);
    data_labels_h.each(function() {
      // Subtract 10 pixels to the labels to move them into the stacked bars.
      var y = parseFloat(d3.select(this).attr('x')) - 6;
      d3.select(this).attr('x', y);
    });
  }


  render() {
    const legend = `${this.props.id}_legend`;
    const dropdown = `${this.props.id}_dropdown`;
    const options = `${this.props.id}_options`;


    var chart_classes = `c-graph__container c-${this.props.file.data.type}__container`;
    if (this.props.file.data.groups) {
      chart_classes += ` c-${this.props.file.data.type}__container--grouped`;
    }
    // if (this.props.small === true){
    //  chart_classes += ` small-multiple-{this.props.small}` 
    // }

    return (
      <div>
        <div id={dropdown} className="c-graph_dropdown" />
        <div id={legend} className="c-graph__legend" />
        <div id={this.props.id} className={`c-graph__container ${chart_classes}`} />
        <div id={options} className="c-graph__options" />
      </div>
    );
  }
}

BaseGraph.propTypes = {
  content: React.PropTypes.string,
  small: React.PropTypes.string,
  id: React.PropTypes.string,
  children: React.PropTypes.number
};
BaseGraph.defaultProps = {
  type: 'line',
  small: 'false',
  id: '',
  children: 0
};


export class GraphAttribution extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <strong className="c-text__viz-notes__title">{_.capitalize(this.props.type)}: </strong>
        <p className="c-text__viz-notes__description" dangerouslySetInnerHTML={{ __html: this.props.text }} />
      </div>
    );
  }
}

GraphAttribution.propTypes = {
  type: React.PropTypes.string,
  text: React.PropTypes.string
};
GraphAttribution.defaultProps = {
  type: 'notes',
  text: ''
};


export default class Graph extends Component {
  constructor(props) {
    super(props);

    // Create unique ID for element.
    this.id = 'graph' + util.uniqueID();

    // Force specify type of graph.
    if (props.file && props.file.data && !props.file.data.type) {
      props.file.data.type = props.type;
    }
  }
  render() {
    let base_class = `c-graph c-${this.id}-container c-${this.props.file.data.type}`,
        anchor = null;

    // If it's a grouped bar chart, flag it as such (so we can move the labels)
    if (this.props.file.data.groups) {
      base_class += ` c-${this.props.file.data.type}-grouped`;
    }

    if ((this.props.file.data.columns && this.props.file.data.columns.length > 1) || this.props.file.data.groups) {
      base_class += ' has-legend';
    }
    if ((this.props.file.data.sets)) {
      let max_set_data = 0;
      base_class += ' has-toggle';
    }

    // If it's horizontal, drop that in as the classname.
    base_class += (this.props.file.axis && this.props.file.axis.rotated) ? ` c-${this.props.file.data.type}-horizontal` : ` c-${this.props.file.data.type}-vertical`;

    if (this.props.anchor_name) {
      // Replace any spaces with _.
      let anchor_name = util.cleanString(this.props.anchor_name);
      anchor = <a name={anchor_name}></a>;
    }

    // Set up notes and source if they exist
    let notes = false;
    if (this.props.file.metadata && this.props.file.metadata.notes) {
      notes = <GraphAttribution type="notes" text={this.props.file.metadata.notes} />;
    }
    let source = false;
    if (this.props.file.metadata && this.props.file.metadata.source) {
      source = <GraphAttribution type="source" text={this.props.file.metadata.source} />;
    }
    let subtitle = false;
    if (this.props.file.subtitle) {
      subtitle = <div className="subtitle">{this.props.file.subtitle}</div>;
    }

    let extension = false;
    let imgFileName = false;
    if(this.props.file.data.sets){
      extension = ".zip"
    }else{
      extension = ".png"
    }

    if(this.props.file.imageOverride){
      imgFileName = "\/img\/" + util.machineName(this.props.file.imageOverride) + extension
    }else{
      imgFileName = "\/img\/" + util.machineName(this.props.file.title) + extension
    }


    console.log(imgFileName)

    // Check if there is an associated image with graph.  If so, mock up the ActionButton appropriately.
    let img_href = '#';
    let img_disable = 'true';

    img_href = imgFileName;
    img_disable = 'false';
    

    // Only show buttons on all but small graphs (otherwise, it'd look ridiculous...).
    let action_buttons;
    if (this.props.small !== 'true') {
      action_buttons = (
        <Actions>
          <ActionButton title='Save Image' href={img_href} disable={img_disable} />
          <ActionButton title='Download data (csv)' href='#' />
        </Actions>
      );
    }
    return (
      <div className={base_class}>
        <h2 className="graphTitle">{this.props.file.title}</h2>
        {subtitle}
        {anchor}
        <div className="c-graph__wrapper">
          <LazyLoad>
            <BaseGraph file={this.props.file} id={this.id} small={this.props.small} children={this.props.children}/>
          </LazyLoad>
        </div>
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

Graph.propTypes = {
  anchor_name: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  image: React.PropTypes.string,
  small: React.PropTypes.string,
  children: React.PropTypes.number
};
Graph.defaultProps = {
  anchor_name: '',
  title: '',
  type: 'line',
  image: '',
  small: 'false',
  children: 0
};
