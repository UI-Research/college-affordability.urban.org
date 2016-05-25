'use strict';

const ExecutionEnvironment = require('exenv');

if (ExecutionEnvironment.canUseDOM) {
  require('./lato/lato.scss');
  require('./montserrat/montserrat.scss');
}
