'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import d3 from 'd3';
import ExecutionEnvironment from 'exenv';
import util from 'util.jsx';

module.exports = {
  f: (pattern, zero = false, type = 'axis', data = null) => {
    let alt = "";
    let axis = "";
    let flag = "";
    let scalar = 0;

    if(pattern == 'dollar'){
        axis = '$s'
        pattern = '$,.1f';
        alt = '$,.2s';
    }
    else if(pattern == 'percent'){
        axis = '%'
        pattern = '%';
        alt = '%'
    }
    else if(pattern == 'number'){
        axis = 's'
        pattern = ',.1f';
        alt = '.2s';
    }
    console.log(data)


    // Additional formatting logic.
    return (v, id, i, j) => {
      // Hide data labels when window resizes to a smaller width.
      if (window.innerWidth < util.breakpointWidth('mid') && !zero) {
        return '';
      }
      if(type == "axis"){
        if(v == 0){
          if(pattern == '%'){
            pattern = '%'
          }
          else if (pattern == '$,.1f' || pattern == '$,.2s'){
            pattern = '$'
          }else{
            pattern = 'f'
          }
        }else{
          pattern = axis;  
        }
      }

      // If empty, don't bother showing the labels.
      // Prevents stacked charts from having values stack.
      if (v == 0 && type == "label") {
        return '';
      }

      // If values exceed a certain point, let's use the special
      // thousands/millions/billions formatter instead.
      if (_.isNumber(v) && (v > 999 || v < -999) && alt && type != "axis") {
        pattern = alt
      }
      return d3.format(pattern)(v);
      
     
      
      
    }
  }
}
