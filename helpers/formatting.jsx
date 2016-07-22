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
    switch(pattern) {
      case 'dollar':
        pattern = '$,.0f';
        alt = '$,.2s';
        break;
      case 'percent':
        pattern = '%';
        alt = '%'
        break;
      case 'number':
        pattern = ',.0f';
        alt = ',.2s';
        break;
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
      return d3.format(pattern)(v);
    }
  }
}
