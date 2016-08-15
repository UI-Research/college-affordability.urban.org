'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import d3 from 'd3';
import ExecutionEnvironment from 'exenv';
import util from 'util.jsx';

module.exports = {
  f: (pattern, zero = false) => {
    let alt;
    if(pattern == 'dolar'){
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
    else if(pattern.search('dual') == 0){
        pattern = pattern.split("_")[1];
        alt = "dual";
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
      if(alt == "dual"){
            return d3.format('$,.0f')(v) + " (" + d3.format("%")(v/parseFloat(pattern)) + ")"
      }else{
        return d3.format(pattern)(v);
      }
    }
  }
}
