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
      constructed('First'),
      constructed('Second'),
      constructed('Third'),
    ],
    "type": "bar",
    "labels": {
      "format": {
        "First": d3.format('$'),
        "Second": d3.format('$'),
        "Third": d3.format('$')
      }
    },
  },
  "axis": {
    "rotated": false,
    "x": {
      "label": "X Label",
      "type": "category",
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
    "notes": "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "data": "<a href='http://www.google.com'>Source Link Goes Here</a>"
  }
}
