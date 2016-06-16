'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx'),
      BarGraph = require('30-components/graphs/bar/bar.jsx'),
      LineGraph = require('30-components/graphs/line/line.jsx'),
      MultiPage = require('30-components/multipage/multipage.jsx'),
      LazyLoad = require('30-components/basic/lazyload/lazyload.jsx');

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
        <div>First</div>
      ),
    },
    'two': {
      title: 'TWO',
      content: (
        <div>Second</div>
      ),
    },
    'three': {
      title: 'THREE',
      content: (
        <div>Third</div>
      ),
    },
    'uno': {
      title: 'UNO',
      content: (
        <div>Uno</div>
      ),
    },
    'dos': {
      title: 'DOS',
      content: (
        <div>Dos</div>
      ),
    },
    'tres': {
      title: 'TRES',
      content: (
        <div>Tres</div>
      ),
    },
    'quatro': {
      title: 'QUATRO',
      content: (
        <div>Quatro</div>
      ),
    },
    'cinco': {
      title: 'CINCO',
      content: (
        <div>Cinco</div>
      ),
    },
    'seis': {
      title: 'SEIS',
      content: (
        <div>Seis</div>
      ),
    },
    'siete': {
      title: 'SIETE',
      content: (
        <div>Siete</div>
      ),
    },
    'ocho': {
      title: 'OCHO',
      content: (
        <div>Ocho</div>
      ),
    },
  }
}

let specifications = {
  'name': 'about',
  'content':
      <div className='test'>
        <MultiPage content={multipage} />
        <Text title="General Text Box">
          <p>Example of a text box?</p>
          <a href="http://www.google.com">This is a link</a>
        </Text>
        <BarGraph title="one" file={require('./sample.json')} />
        <img src='/img/PSVFcxr.jpg' />
        <BarGraph title="two" file={require('./sample.json')} />
        <img src='/img/MPxXjTj.jpg' />
        <BarGraph title="three" file={require('./sample.json')} />
        <LineGraph title="four" anchor_name="four_four" file={require('./sample.json')} />
        <img src='/img/4HLZjYB.jpg' />
        <BarGraph title="five" anchor_name="five" file={require('./sample.json')} />
        <BarGraph title="six" anchor_name="six" file={require('./sample.json')} />
        <img src='/img/EYUcKub.jpg' />
        <BarGraph title="seven" file={require('./sample.json')} />
        <img src='/img/PSVFcxr.jpg' />
        <BarGraph title="eight" file={require('./sample.json')} />
        <LazyLoad>
          <FAQ title="Frequently Asked Questions" set={faq} />
        </LazyLoad>
        <img src='/img/MPxXjTj.jpg' />
        <BarGraph title="My Bar Chart" file={require('./sample.json')} />
        <LineGraph title="My Line Chart" file={require('./sample.json')} />
        <i className="fa fa-camera-retro"></i> asdf
        <div className='asdf'><strong>Custom HTML</strong></div>
        <div className="grid">
          <div className="col col--2-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis feugiat tellus, ac laoreet nulla dignissim vitae. Nullam vulputate ante in turpis rutrum semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus et scelerisque lectus. Vestibulum nec pretium lacus, id suscipit ligula. Praesent fermentum, sem eu hendrerit ultricies, metus odio luctus urna, ut lacinia diam odio quis neque. Aliquam bibendum lorem nec rhoncus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer cursus mi posuere, placerat lacus at, sodales nunc.
          </div>
          <div className="col col--1-3">Second colum</div>
        </div>
      </div>
};

const About = React.createClass({
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
util.printToPage('about', About);

module.exports = About;
