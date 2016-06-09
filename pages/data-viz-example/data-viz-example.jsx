'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx');
const BarGraph = require('30-components/graphs/bar/bar.jsx');

const util = require('util.jsx');

let specifications = {
  'name': 'data-viz-example',
  'nav':
    <div className="nav-secondary">
      <ul>
        <li className="active"><a href="#">Institutional Subsidy</a></li>
        <li><a href="#">Forgone Earnings</a></li>
        <li><a href="#">Sticker Prices</a></li>
        <li><a href="#">Student Budges</a></li>
        <li><a href="#">Net Prices</a></li>
      </ul>
    </div>
  ,
  'content':
    <div className='data-viz'>

      <Text title="Producing Education">
        <div className="grid">
          <div className="col col--1-4">
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Subsidies</a></li>
              <li><a href="#">Appropriations</a></li>
              <li><a href="#">Endowments</a></li>
            </ul>
          </div>
          <div className="col col--3-4">


            <h2>Overview</h2>

            <div className="media media--right-align">
              <BarGraph title="My Bar Chart" file={require('./sample.json')} />
              <div className="caption caption--below">Caption for image for data visualization</div>
            </div>

            <p>Students see the prices colleges charge, but the amounts that colleges spend to provide education are less visible. To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. An institution’s reported education and related expenditure per student is a good indication of the expenses it incurs in educating students, though it does not account for the full cost. There is a general consensus that it costs significantly more to educate graduate students, but because we don’t have a precise way of separating out these costs, the average subsidies at universities are higher than those at bachelor’s colleges. Average education and related spending per student varies considerably across sectors, partially because of differences in institutions’ activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity. To cover costs, all colleges and universities use revenues from tuition and fees; public and private nonprofit institutions also contribute from their own resources. Institutional subsidies are the share of the total cost that is covered by the institution rather than by the students’ tuition. In the public sector, these subsidies come primarily from state and local tax revenues. In the private sector, they come from endowment income, annual giving, and other private sources.
            </p>

            <hr />

            <h2>Subsidies</h2>

            <p>Public research universities spend almost 50% more per student than public master’s universities, and
              more than twice as much as public two-year colleges. These gaps across sectors have grown over time.
            </p>
            <p>Because the funds states provide to public institutions have not kept up with growing enrollments,
              students received smaller subsidies in 2013-14 than in 2005-06</p>
            <p className="c-text__emphasis">After remaining stable between 2005-06 and 2009-10, per student expenditures at public institutions
              increased (in inflation-adjusted dollars) between 2009-10 and 2013-14.</p>

            <h5 className="c-text__figure-title">Figure 1a:</h5>

            <p className="c-text__caption c-text__caption--top">Institutional subsidies are the share of the total cost that is covered by the institution rather than by the
              student’s tuition. In the public sector, these subsidies come primarily from state and local tax revenues. In
              the private sector, they come from endowment income, annual giving, and other private sources.
            </p>

            <div className="placeholder-viz"></div>

            <div className="c-text__caption c-text__caption--bottom">

              <div className="c-text__viz-notes">

                <div>
                  <strong className="c-text__viz-notes__title">Sources:</strong>
                  <p className="c-text__viz-notes__description">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  </p>
                </div>

                <div>
                  <strong className="c-text__viz-notes__title">Notes:</strong>
                  <p className="c-text__viz-notes__description">
                    Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the
                    holistic world view of disruptive innovation via workplace diversity and empowerment.
                  </p>
                </div>

                <div>
                  <strong className="c-text__viz-notes__title">Data:</strong>
                  <p className="c-text__viz-notes__description">
                    <a href="#">Source Link Goes Here</a>
                  </p>
                </div>

              </div>

              <div className="c-text__viz-actions">
                <a href="#" className="btn">Save Image <i className="fa fa-download"></i></a>
                <a href="#" className="btn">Download data (csv) <i className="fa fa-download"></i></a>
              </div>

            </div>

            <h5>Related</h5>
            <p><a href="#">Chart: Degree-granting institutions by sector and degree-type in fall 2014</a></p>


            <hr />
            <h3>Spending Per Student</h3>
            <h5>Figure 1a</h5>

            <div className="c-text__caption c-text__caption--top">
              Education and related spending per student at public institutions, divided into net tuition revenue and subsidy, by
              Carnegie classification, from 2005-06 to 2013-14
            </div>
            <div className="placeholder-viz"></div>

            <ul>
              <li><a href="#">Institutional subsidies</a></li>
              <li><a href="#">Endowments</a></li>
              <li><a href="#">State and local appropriations (public institutions only)</a></li>
            </ul>

          </div>
        </div>
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

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('Data Viz Example', DataVizExample);

module.exports = DataVizExample;
