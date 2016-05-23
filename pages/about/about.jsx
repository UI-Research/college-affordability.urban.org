'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ExecutionEnvironment = require('exenv');
const Template = require('../../components/20-templates/default.jsx');
const Text = require('../../components/30-components/basic/text/text.jsx');

let specifications = {
  'name': 'about',
  'content': <div className='test'>
        <Text title="Law & Order">
          <p>What are you doing?</p>
          <p>No me gusta</p>
        </Text>
        <div id='asdf'><strong>About US !!!</strong></div>
      </div>
};

const Page = React.createClass({
  render: function() {
    return (
      <Template title="About USA" includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  //require('./' + specifications.name.toLowerCase() + '.scss');
  require('./about.scss');
  ReactDOM.render((
    <Page />
  ), document.getElementById('container'));
}

module.exports = Page;
