'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import d3 from 'd3';
import ExecutionEnvironment from 'exenv';
import util from 'util.jsx';

module.exports = {
  f: (pattern, zero = false, type = 'axis', data = null) => {
    let alt;
    let flag = "";
    let scalar = 0;

    if(pattern == 'dollar'){
        pattern = '$,.0f';
        alt = '$,.2s';
    }
    else if(pattern == 'percent'){
        pattern = '%';
        alt = '%'
    }
    else if(pattern == 'number'){
        pattern = ',.0f';
        alt = ',.2s';
    }
    // else if(pattern.search('dual') == 0){
    //     if(type == 'axis'){
    //       pattern = '$,.0f';
    //       alt = '$,.2s';
    //     }else if(pattern == "dual_stacked"){
    //       pattern = 0;
    //       alt = "dual_stacked"
    //     }else{
    //       pattern = pattern.split("_")[1];
    //       alt = "dual";
    //     }
    // }
    else if(pattern.search("dual") == 0){
      let components = pattern.split("_")
      if (components[1].search("%") != -1){
        flag = "dual_percent_first"
        scalar = components[3]
      }else{
        flag = "dual_percent_second"
      }
      pattern = components[1]
      alt = components[2]

      // tmp = pattern
      // pattern = tmp[0]
      // alt = tmp[1]
      // flag = "dual"

    }

    // Additional formatting logic.
    return (v, id, i, j) => {
      // Hide data labels when window resizes to a smaller width.
      if (window.innerWidth < util.breakpointWidth('mid') && !zero) {
        return '';
      }

      // If empty, don't bother showing the labels.
      // Prevents stacked charts from having values stack.
      if (v == 0 && !zero) {
        return '';
      }

      // If values exceed a certain point, let's use the special
      // thousands/millions/billions formatter instead.
      if (_.isNumber(v) && v > 9999 && alt) {
        pattern = alt;
      }
      if(flag == "dual_percent_second"){
        if(type == "axis"){
          return d3.format(pattern)(v)
        }
        var counter = (type == 'tooltip') ? j : i;
        var total = 0;
        for(var n = 0; n < data["data"]["columns"].length; n++){
          total += data["data"]["columns"][n][counter+1]
        }
        if (v == 0 && type != 'tooltip') {
          return '';
        }else{
          return d3.format(pattern)(v) + " (" + d3.format(alt)(v/parseFloat(total)) + ")"
        }
        
      }
      else if(flag == "dual_percent_first"){
        if(type == "axis"){
          return d3.format(pattern)(v)
        }
        if (v == 0 && type != 'tooltip') {
          return '';
        }else{
          return d3.format(pattern)(v) + " (" + d3.format(alt)(v*parseFloat(scalar)) + ")"
        }
        
      }

      else{
        return d3.format(pattern)(v);
      }
    }
  }
}
