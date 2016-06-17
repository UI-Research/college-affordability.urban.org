const d3 = require('d3');

module.exports = {
  "title": "Sample Graphs",
  "data": {
    "columns": [
      ["1990", 130, 200, 100, 400, 150, 250],
      ["2000", 150, 20, 10, 40, 15, 25],
      ["2010", 90, 120, 50, 140, 60, 10]
    ],
    "labels": {
      "format": {
        "1990": d3.format('$'),
        "2000": d3.format('$'),
        "2010": d3.format('$')
      }
    },
  },
  "axis": {
    "rotated": false,
    y : {
      tick: {
        format: d3.format("$")
      }
    },
  },

  "notes": "<strong>Lorem Ipsum</strong>"
}
