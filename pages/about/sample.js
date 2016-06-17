const d3 = require('d3');

module.exports = {
  "title": "Sample Graphs",
  "data": {
    "columns": [
      ["First", 130, 200, 100, 400, 150, 250],
      ["Second", 150, 20, 10, 40, 15, 25],
      ["Third", 90, 120, 50, 140, 60, 10]
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

  "notes": "<strong>Lorem Ipsum</strong>"
}
