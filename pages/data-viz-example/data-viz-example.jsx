'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx'),
      BarGraph = require('30-components/graphs/bar/bar.jsx'),
      Box = require('30-components/box/box/box.jsx'),
      Factoid = require('30-components/box/factoid/factoid.jsx'),
      Featured = require('30-components/box/featured/featured.jsx'),
      Notes = require('30-components/basic/notes/notes.jsx'),
      Note = require('30-components/basic/note/note.jsx'),
      CaptionBottom = require('30-components/caption/bottom/bottom.jsx'),
      CaptionTop = require('30-components/caption/top/top.jsx'),
      Actions = require('30-components/basic/actions/actions.jsx'),
      ActionButton = require('30-components/basic/action_button/action_button.jsx');

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
      <div className="breadcrumb">
        <a href="#">HOME</a> / <a href="#">Breadcrumb Link</a> / Producing Education
      </div>
      <h1 className="heading-accent">Producing Education</h1>
      <div className="grid">
        <div className="col col--1-4">

          <div className="nav-anchor">
            <ul className="nav-anchor__top-level">
              <li><a href="#" className="active">Overview</a></li>
              <li><a href="#">Subsidies</a></li>
              <li><a href="#">Appropriations</a><i className="fa fa-chevron-down"></i>
                <ul className="nav-anchor__second-level">
                  <li><a href="#">State and Local Appropriations</a></li>
                  <li><a href="#">Changes over time</a></li>
                </ul>
              </li>
              <li><a href="#">Endowments</a></li>
            </ul>
          </div>

        </div>
        <div className="col col--3-4">

          <h2>Overview</h2>

          <div className="media media--right-align">
            <div className="icon">
              <div className="icon__teaching">
              </div>
            </div>
          </div>

          <p>Students see the prices colleges charge, but the amounts that colleges spend to provide education are less visible. To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. An institution's reported education and related expenditure per student is a good indication of the expenses it incurs in educating students, though it does not account for the full cost. There is a general consensus that it costs significantly more to educate graduate students, but because we don't have a precise way of separating out these costs, the average subsidies at universities are higher than those at bachelor's colleges. Average education and related spending per student varies considerably across sectors, partially because of differences in institutions' activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity. To cover costs, all colleges and universities use revenues from tuition and fees; public and private nonprofit institutions also contribute from their own resources. Institutional subsidies are the share of the total cost that is covered by the institution rather than by the students' tuition. In the public sector, these subsidies come primarily from state and local tax revenues. In the private sector, they come from endowment income, annual giving, and other private sources.
          </p>

          <hr />

          <h2>Subsidies</h2>

          <p>Public research universities spend almost 50% more per student than public master's universities, and
            more than twice as much as public two-year colleges. These gaps across sectors have grown over time.
          </p>
          <p>Because the funds states provide to public institutions have not kept up with growing enrollments,
            students received smaller subsidies in 2013-14 than in 2005-06</p>
          <Box>
            <h2>How do states determine appropriation levels?</h2>
            <p>After remaining stable between 2005-06 and 2009-10, per student expenditures at public institutions
              increased (in inflation-adjusted dollars) between 2009-10 - 2013-14.</p>
            <p>Public research universities spend almost 50% more per student than public master's universities, and
            more than twice as much as public two-year colleges. These gaps across sectors have grown over time. Because the funds states provide to public institutions have not kept up with growing enrollments,
              students received smaller subsidies in 2013-14 than in 2005-06</p>
            <p>Because the funds states provide to public institutions have not kept up with growing enrollments,
            students received smaller subsidies in 2013-14 than in 2005-06</p>
          </Box>

          <h5>Figure 1a:</h5>
          <p>Public research universities spend almost 50% more per student than public master's universities, and
            more than twice as much as public two-year colleges. These gaps across sectors have grown over time.
          </p>
          <p>Public research universities spend almost 50% more per student than public master's universities, and
            more than twice as much as public two-year colleges. These gaps across sectors have grown over time.
          </p>

          <CaptionTop>
            <p>Institutional subsidies are the share of the total cost that is covered by the institution rather than by the
              student's tuition. In the public sector, these subsidies come primarily from state and local tax revenues. In
              the private sector, they come from endowment income, annual giving, and other private sources.
            </p>
          </CaptionTop>

          <div className="c-text__viz">
            <BarGraph title="" file={require('./sample.json')} />
          </div>

          <CaptionBottom>
            <Notes>

              <Note title='Sources'>
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
              </Note>

              <Note title='Notes'>
                  Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the
                  holistic world view of disruptive innovation via workplace diversity and empowerment.
              </Note>

              <Note title='Data'>
                  <a href="#">Source Link Goes Here</a>
              </Note>

            </Notes>

            <Actions>
              <ActionButton title='Save Image' href='#'/>
              <ActionButton title='Download data (csv)' href='#'/>
            </Actions>

          </CaptionBottom>

          <h5>Related</h5>
          <p><a href="#">Chart: Degree-granting institutions by sector and degree-type in fall 2014</a></p>

          <hr />

          <h2>Appropriations</h2>

          <h3>State and Local Appropriations</h3>

          <p>Students at public colleges and universities pay prices that do not cover the full cost of education, because state and local governments appropriate some of their tax revenues to institutions, providing the subsidies described in the previous section. Over time, the portion of the cost of education at public colleges and universities covered by state funds has declined. As state taxpayers foot less of the bill, students and families see tuition and fees rising.</p>
          <p>State tax revenues are the primary source of state and local funding for higher education institutions, but local taxes support community colleges and provided just over 10 percent of the total in 2013-14. State and local appropriations are dedicated primarily to public colleges and universities, but some of the funds go to student aid, some benefit students in private colleges, and some are restricted funds for special purposes like research, agriculture, and medical education.</p>


          <Box>
            <h4>How do states determine appropriation levels?</h4>

            <p>
              Figures on state funding of public higher education come from a survey conducted jointly by the State Higher Education Executive Officers (SHEEO) and Illinois State University's Center for the Study of Education Policy. The reported figures include funding from tax revenues and from other state sources such as lotteries. They exclude funding for capital expenditures. Most of the funds go directly to public institutions, but some go to higher education coordinating boards or to other state agencies that allocate them to institutions, in some states including private colleges and universities. The appropriation figures also include state funding for student financial aid.
            </p>
            <p>
              Many states have explicit formulas for allocating all or part of their funding for instructional expenditures, the operation and maintenance of physical plant, and other expenditures across institutions. Funding is usually tied to the number of credit hours enrolled in or completed. Some states make annual adjustments to the previous year's funding received by each institution, and some have less defined approaches determined by legislative priorities.
            </p>
            <p>
              Some formulas for allocating funds to institutions are based only on enrollments, but an increasing number of states use some variety of â€œperformance-based fundingâ€ (PBF), incorporating measures of outcomes into their formulas. This approach has come and gone since the 1970s as states have faced changing economic circumstances, enrollment growth, and evolving priorities. There is little evidence that PBF has had a significant impact on the efficiency and outcomes of postsecondary institutions in the past, but there is widespread optimism that new models with more carefully defined outcomes measures and consideration of the characteristic of incoming students, which are developing rapidly, will be more successful in improving student success rates.
            </p>
          </Box>

          <h3>Changes over time</h3>

          <p>
            Over the period from FY2000 to FY2014, enrollment in public colleges and universities grew by more
            than 30 percent; overall state and local appropriations to public higher education peaked in FY2008 and
            in FY2014, were below their fell below the FY2001 level. These two trends resulted in the decline of
            appropriations per public-sector student by more than 40 percent from FY2000 to FY2014.
          </p>

          <ul>
            <li><a href="#">Institutional subsidies</a></li>
            <li><a href="#">Endowments</a></li>
            <li><a href="#">State and local appropriations (public institutions only)</a></li>
          </ul>

          <Box>
            <p>
              Over the period from FY2000 to FY2014, enrollment in public colleges and universities grew by more
              than 30 percent; overall state and local appropriations to public higher education peaked in FY2008 and
              in FY2014, were below their fell below the FY2001 level. These two trends resulted in the decline of
              appropriations per public-sector student by more than 40 percent from FY2000 to FY2014.
            </p>
          </Box>

        </div>
      </div>
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
  //require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('Data Viz Example', DataVizExample);

module.exports = DataVizExample;
