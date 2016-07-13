'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import d3 from 'd3';
import ExecutionEnvironment from 'exenv';

module.exports = {
  f: (pattern) => {
    switch(pattern) {
      case 'dollar':
        pattern = '$,.0f';
        break;
      case 'percent':
        pattern = '%';
        break;
      case 'number':
        pattern = ',.0f';
        break;
    }
    return d3.format(pattern);
  }
}
