'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      d3 = require('d3'),
      ExecutionEnvironment = require('exenv');
const Template = require('../../components/20-templates/default/default.jsx');
const Text = require('../../components/30-components/basic/text/text.jsx'),
      FAQ = require('../../components/30-components/basic/faq/faq.jsx'),
      BarGraph = require('../../components/30-components/graphs/bar/bar.jsx');

let faq = [
  {
    'q': 'What is your name?',
    'a': 'Sir Camelot'
  },
  {
    'q': 'What is your quest',
    'a': 'To Seek the Holy Grail'
  },
  {
    'q': 'What is the velocity of a swallow?',
    'a': 'African or European?'
  }
];

let specifications = {
  'name': 'about',
  'content':
      <div className='test'>
        <Text title="General Text Box">
          <p>Example of a text box?</p>
          <a href="http://www.google.com">This is a link</a>
        </Text>
        <FAQ title="Frequently Asked Questions" set={faq} />
        <div className='asdf'><strong>Custom HTML</strong></div>
        <BarGraph data={[4, 8, 15, 16, 23, 42]} />
      </div>
};

const Page = React.createClass({
  render: function() {
    return (
      <Template title="About US" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  require('./' + specifications.name.toLowerCase() + '.scss');
  ReactDOM.render((
    <Page />
  ), document.getElementById('container'));
}

module.exports = Page;
