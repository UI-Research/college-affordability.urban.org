'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Graph = require('30-components/graphs/graph/graph.jsx'),
      MultiPage = require('30-components/multipage/multipage.jsx');

const util = require('util.jsx');

let multipage = {
  links: [
    'one',
    [
      'uno',
      'quatro',
      'cinco'
    ],
    'two',
    [
      'dos',
      'tres',
      'seis',
      'siete',
      'ocho'
    ],
    'three'
  ],
  content: {
    'one': {
      title: 'ONE',
      content: (
        <div>
          <div className="grid">
            <div className="col col--2-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis feugiat tellus, ac laoreet nulla dignissim vitae. Nullam vulputate ante in turpis rutrum semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus et scelerisque lectus. Vestibulum nec pretium lacus, id suscipit ligula. Praesent fermentum, sem eu hendrerit ultricies, metus odio luctus urna, ut lacinia diam odio quis neque. Aliquam bibendum lorem nec rhoncus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer cursus mi posuere, placerat lacus at, sodales nunc.
            </div>
            <div className="col col--1-3">Second colum</div>
          </div>
        </div>
      )
    },
    'two': {
      title: 'TWO',
      content: (
        <div>
          <img src='/img/PSVFcxr.jpg' />
          <Graph title="two" file={require('./sample.js')} />
        </div>
      )
    },
    'three': {
      title: 'THREE',
      content: (
        <div>
          <img src='/img/MPxXjTj.jpg' />
          <Graph title="three" file={require('./sample.js')} />
        </div>
      )
    },
    'uno': {
      title: 'UNO',
      content: (
        <div>
          <img src='/img/EYUcKub.jpg' />
          <Graph title="seven" file={require('./sample.js')} />
        </div>
      )
    },
    'dos': {
      title: 'DOS',
      content: (
        <div>
          <img src='/img/PSVFcxr.jpg' />
          <Graph title="eight" file={require('./sample.js')} />
        </div>
      )
    },
    'tres': {
      title: 'TRES',
      content: (
        <div>
          <Graph title="My Line Chart" file={require('./sample.js')} />
          <i className="fa fa-camera-retro"></i>
        </div>
      )
    },
    'quatro': {
      title: 'QUATRO',
      content: (
        <div>
          <Graph title="one" anchor_name="bar_one" file={require('./sample.js')} />
        </div>
      )
    },
    'cinco': {
      title: 'CINCO',
      content: (
        <div>
          <img src='/img/MPxXjTj.jpg' />
          <Graph title="My Bar Chart" file={require('./sample.js')} />
        </div>
      )
    },
    'seis': {
      title: 'SEIS',
      content: (
        <div>
          <img src='/img/4HLZjYB.jpg' />
          <Graph title="five" anchor_name="five" file={require('./sample.js')} />
        </div>
      )
    },
    'siete': {
      title: 'SIETE',
      content: (
        <div>
          <Graph title="four" anchor_name="four_four" file={require('./sample.js')} />
          <Graph title="six" anchor_name="six" file={require('./sample.js')} />
        </div>
      )
    },
    'ocho': {
      title: 'OCHO',
      content: (
        <div className='asdf'><strong>Custom HTML</strong></div>
      )
    }
  }
};

let specifications = {
  'name': 'test',
  'content': <MultiPage content={multipage} />
};

const Test = React.createClass({
  render: function() {
    return (
      <Template title="About US" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('about', Test);

module.exports = Test;
