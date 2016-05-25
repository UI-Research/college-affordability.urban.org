'use strict';

const React = require('react'),
  ExecutionEnvironment = require('exenv'),
  util = require('../../helpers/util.jsx');
const Template = require('../../components/20-templates/default/default.jsx');
const ContainerQueryTest = require('../../components/30-components/container-query/container-query.jsx');

let specifications = {
  'name': 'container-query',
  'content':
    <div>
      <ContainerQueryTest/>
    </div>
};

const ContainerPage = React.createClass({
  render: function() {
    return (
      <Template title="React Container Demo" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (ExecutionEnvironment.canUseDOM) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('container-query', ContainerPage);

module.exports = ContainerPage;
