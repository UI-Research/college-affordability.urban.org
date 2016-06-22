'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx'),
      BarGraph = require('30-components/graphs/bar/bar.jsx'),
      LineGraph = require('30-components/graphs/line/line.jsx'),
      Factoid = require('30-components/box/factoid/factoid.jsx'),
      FAQ = require('30-components/box/faq/faq.jsx'),
      MultiPage = require('30-components/multipage/multipage.jsx');

const util = require('util.jsx');


let multipage = {
  links: [
    'overview',
    'subsidies',
    [
      'subsidies_variations'
    ],
    'appropriations',
    'endowments',
    [
      'endowments_variations'
    ]
  ],
  content: {
    'overview': {
      title: 'Overview',
      content: (
        <div>
          <h2>What schools pay (section 2)</h2>
          <p>Students see the prices colleges charge, but what they might not realize is that the tuition amount they see is only a fraction of what their education really costs.</p>
          <p>To educate a student, a college must pay for instructors, student services, administrative support, and maintenance, among other things. Average education and related spending1 per student varies considerably across sectors, partially because of differences in institutions’ activities. For example, public two-year colleges almost exclusively educate lower-level undergraduates, while public research universities educate these students, upper-level undergraduates, and graduate students, in addition to engaging in a significant amount of research activity.</p>
          <p>To cover costs, all colleges and universities use revenues from tuition and fees, but nonprofit colleges also supplement that revenue with their own resources, which include state and local tax revenues in the public sector and endowment income and annual giving in the private sector.</p>

          <Factoid>
            <p><strong>Education and related spending</strong></p>
            <p>"Education and related expenditures" include spending by colleges and universities on instruction, student services, and a portion of academic and administrative support and operations and maintenance. This measure excludes the cost of college buildings and spending on research and public service. It also excludes scholarships and fellowships, which are discounts to student. Institutions never get this revenue and cannot spend it.   Instruction, the largest single cost category at public and private nonprofit institutions, includes faculty salaries and benefits. Student services include expenses such as admissions, registrars, health services, and student affairs. Academic support includes advising, libraries, technology, academic administration, and related expenditures.</p>
          </Factoid>
        </div>
      )
    },
    'subsidies': {
      title: 'Subsidies',
      content: (
        <div>
          <h2>Institutional subsidies</h2>
            <p>An institutional subsidy is the share of the total cost that is covered by the institution rather than by the students’ tuition. This share varies significantly both across sectors and within sectors. Though a student likely doesn’t know the size of the subsidy he’s receiving, it can be an important factor in determining the cost of his education.</p>
            <h3>By sector</h3>
            <p><strong>Public</strong> research universities spend almost 50 percent more per student per year than public master’s universities and more than twice as much as public two-year colleges. These gaps have grown over time.</p>
            <p>Because the funds states provide to public institutions have not kept up with growing enrollments, students received smaller subsidies in 2013-14 than in 2005-06. This means <strong>that tuition and fees cover an increasing portion of educational expenses</strong>, as these prices have risen much more rapidly than total institutional expenditures.</p>

            ...

            <p>The pattern is quite different at <strong>private</strong> nonprofit colleges and universities, which are not dependent on state funding. Average per-student spending was two and a half times as high at private research universities as at public research universities, although the gap between private and public master’s universities was much smaller. Additionally, at private institutions, <strong>the share of spending covered by tuition revenues has remained constant</strong>.</p>

            ...

            <p>Average subsidies in each sector <strong>conceal wide variation across institutions, with a small number of colleges and universities in each sector providing a high percentage of total subsidies.</strong></p>
            <p>To examine within-sector variation, we broke students in the different sectors into deciles by the size of the subsidies their institutions gave them. This reveals that the institutions with the biggest subsidies skew the averages. <strong>The differences in per-student subsidy across types of institutions are less extreme when considering the middle 60 percent of undergraduate students.</strong></p>

            ...

            <FAQ>
              <h4>Q: Why do students in the top subsidy decile at research universities receive so much more</h4>
              <p>Among the third through eighth deciles, subsidy per student ranges from $4,000 to $10,000 across all public institutions and private nonprofit bachelor’s colleges. Even in this decile range, however, average subsidies in private nonprofit research universities far exceed those in master’s universities.</p>
            </FAQ>
        </div>
      )
    },
    'subsidies_variations': {
      title: 'Variations Within Sectors',
      content: (
        <div>

        </div>
      )
    },
    'appropriations': {
      title: 'Appropriations',
      content: (
        <div>

        </div>
      )
    },
    'endowments': {
      title: 'Endowments',
      content: (
        <div>

        </div>
      )
    },
    'endowments_variations': {
      title: 'Variations Within Sectors',
      content: (
        <div>

        </div>
      )
    },
  }
};

let specifications = {
  'name': 'producing-education',
  'content': <MultiPage content={multipage} />
};

const ProducingEducation = React.createClass({
  render: function() {
    return (
      <Template title="Producing Education" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('producing-education', ProducingEducation);

module.exports = ProducingEducation;
