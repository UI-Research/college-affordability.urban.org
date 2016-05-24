
const React = require('react'),
      ExecutionEnvironment = require('exenv');

const Template = require('../../components/20-templates/default/default.jsx');

const BarChart = require('../../components/30-components/graphs/bar/bar.jsx');


let data = [30,10,5,8,15,20];
let specifications = {
  'name': 'test',
  'content':
      <div className='test'>
        <h1>Custom HTML</h1>
        <BarChart data={data} />
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
  React.renderComponent(
    <Page />,
    document.getElementById('container')
  );
}

module.exports = Page;
