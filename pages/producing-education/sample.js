'use strict';
const d3 = require('d3');

// TEMP: Generates random data.
function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function(_, i) {
        return Math.round(Math.random() * max);
    });
}
let constructed = (key) => { let value = randomArray(6, 200); value.unshift(key); return value; }

module.exports = {
  "title": "Sample Graphs",
  "data": {
    "columns": [
      constructed('First')
    ],
    "type": "bar",
    "labels": {
      "format": {
        "First": d3.format('$')
      }
    },
  },
  "axis": {
    "rotated": false,
    "x": {
      "label": "X Label",
      "type": "indexed",
      "tick": {
        "fit": true
      },
      "categories": ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]
    },
    "y" : {
      "tick": {
        "format": d3.format("$")
      }
    },
  },
  "metadata": {
    "source": "Urban Institute",
    "notes": "Lorem Ipsum",
    "data": "<a href='http://www.google.com'>Source Link Goes Here</a>"
  }
}
