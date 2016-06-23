const d3 = require('d3');

// TEMP: Generates random data.
const randomArray = (length, max) => [...new Array(length)]
    .map((_, i) => Math.round(Math.random() * max));
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
    "notes": "Lorem Ipsum",
    "data": "Source Link Goes Here"
  }
}
