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
        pattern = '$,.1f';
        alt = '$,.2s';
    }
    else if(pattern == 'percent'){
        pattern = '%';
        alt = '%'
    }
    else if(pattern == 'number'){
        pattern = ',.1f';
        alt = '.2s';
    }


    // Additional formatting logic.
    return (v, id, i, j) => {
      // Hide data labels when window resizes to a smaller width.
      if (window.innerWidth < util.breakpointWidth('mid') && !zero) {
        return '';
      }

      // If empty, don't bother showing the labels.
      // Prevents stacked charts from having values stack.
      if (v == 0 && type == "label") {
        return '';
      }
      else if(v == 0 && (pattern = '$,.1f' || pattern == '$,.2s')){
        pattern = '$'
      }
      else if(v == 0 && (pattern = ',.1f' || pattern == '.2s')){
        pattern = 'f'
      }

      // If values exceed a certain point, let's use the special
      // thousands/millions/billions formatter instead.
      if (_.isNumber(v) && (v > 999 || v < -999) && alt) {
        pattern = alt
      }
      return d3.format(pattern)(v);
      
     
      
      
    }
  }
}
