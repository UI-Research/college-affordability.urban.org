'use strict';

const React = require('react'),
      ExecutionEnvironment = require('exenv'),
      ReactCSSTransitionGroup  = require('react-addons-css-transition-group');
const Template = require('../../components/20-templates/default/default.jsx');
const Text = require('../../components/30-components/basic/text/text.jsx'),
      FAQ = require('../../components/30-components/basic/faq/faq.jsx'),
      BarGraph = require('../../components/30-components/graphs/bar/bar.jsx'),
      LineGraph = require('../../components/30-components/graphs/line/line.jsx'),
      PreviewImage = require('../../components/30-components/basic/previewImage/previewImage.jsx');

// react-lazyload doesn't support require().
import LazyLoad from 'react-lazyload';
// to use a placeholder - <LazyLoad placeholder={}>

const util = require('../../helpers/util.jsx');

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
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="one" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="two" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="three" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <LineGraph title="four" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="five" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="six" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="seven" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={500} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <BarGraph title="eight" data={[4, 8, 15, 16, 23, 42]} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={200} throttle={100} offset={-100}>
          <ReactCSSTransitionGroup key="1"
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}>
            <FAQ title="Frequently Asked Questions" set={faq} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
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

// Don't include wihtout DOM available - it will be treated as jsx.
if (ExecutionEnvironment.canUseDOM) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('about', About);

module.exports = About;
