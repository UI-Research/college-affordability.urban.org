'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx');
const BarGraph = require('30-components/graphs/bar/bar.jsx');

const util = require('../../helpers/util.jsx');

let specifications = {
  'name': 'data-viz-example',
  'content':
    <div className='data-viz'>
      <Text title="Costs & Subsidies through Institutions">
        <h2>Overview</h2>
        <div className="media media--right-align">
          <BarGraph data={[4, 8, 15, 16, 23, 42]} />
          <div className="caption caption--below">Caption for image for data visualization</div>
        </div>
        <p>Before a student even gets his bill, the college has taken steps to reduce the price of higher education.</p>
        <p>To educate a student, a college must pay for instructors, student
          services, administrative support, and maintenance, at a bare minimum.
          To cover those costs, colleges and universities use revenues from:
        </p>
        <ul>
          <li><a href="#">Institutional subsidies</a></li>
          <li><a href="#">Endowments</a></li>
          <li><a href="#">State and local appropriations (public institutions only)</a></li>
        </ul>
        <p>Total education and related spending per student varies considerably across sectors. Part of the difference
          is accounted for by the cost differences in institutions’ activities. For example, public two-year colleges
          almost exclusively educate lower-level undergraduates, while public research universities educate these
          students, upper-level undergraduates, and graduate students, in addition to engaging in a significant
          amount of research activity.
        </p>
        <h2>Institutional Subsidies</h2>
        <p>Institutional subsidies are the share of the total cost that is covered by the institution rather than by the
          student’s tuition. In the public sector, these subsidies come primarily from state and local tax revenues. In
          the private sector, they come from endowment income, annual giving, and other private sources.
        </p>
        <hr />
        <h3>Spending Per Student</h3>
        <div className="caption caption--top">
          Education and related spending per student, divided into net tuition revenue and subsidy, by sector and degree type, from 2005-06 to 2013-14
        </div>
        <div className="placeholder-viz"></div>
      </Text>

    </div>
};

const DataVizExample = React.createClass({
  render: function() {
    return (
      <Template title="Data Viz Example" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

//require('./' + specifications.name.toLowerCase() + '.scss');
util.printToPage('Data Viz Example', DataVizExample);

module.exports = DataVizExample;
