'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import HomePageCTA from '30-components/basic/home-page-cta/home-page-cta.jsx';
import Hero from '30-components/basic/hero/hero.jsx';
import StudentProfiles, { StudentProfile } from '30-components/basic/student-profiles/student-profiles.jsx';

const util = require('util.jsx');

let specifications = {
  'name': 'home',
  'content': (
    <div>
      <Hero src="img/stock-photo-87294393-female-student-using-laptop-for-taking-notes-to-study.jpg">
        <h1>Understanding College Affordability</h1>
        <h2>How Students, Institutions, and the Public Pay for Higher Education</h2>
      </Hero>
      <div className="c-narrative">
        <p>Rising concerns over college tuition and student debt combined with the widespread conviction that a degree is essential for a middle-class lifestyle have led to a sense that college in the United States has become "unaffordable." <strong>But what does affordability actually mean?</strong></p>
        <a href="#" className="c-home__button">Learn About the Project</a>
      </div>
      <div className="cta__container">
        <HomePageCTA src="img/defining-higher-education.svg">
          <h2>Defining Higher Education</h2>
          <p>Morbi ac fringilla magna, quis lobortis urna. Sed id eros sed nibh aliquam fringilla non varius mauris. Pellentesque a volutpat odio. Donec eu nisi sit amet lectus malesuada pellentesque sed eget dolor. Vestibulum sollicitudin tristique nibh, non efficitur velit rutrum nec. Integer condimentum sapien ac erat venenatis luctus.</p>
          <ul>
            <li><a href="#">Call to Action Link</a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/cost-aid-prices.svg">
          <h2>Costs, Aids, and Prices</h2>
          <p>Nunc non diam quis magna volutpat laoreet in nec tortor. Sed at ex tellus. Donec egestas arcu non neque volutpat, quis lacinia nibh fringilla.</p>
          <ul>
            <li><a href="#">Call to Action Link</a></li>
            <li><a href="#">Another Call to Action Link</a></li>
            <li><a href="#">Third Call to Action Link</a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/paying-for-college.svg">
          <h2>Paying for College</h2>
          <p>Pellentesque egestas varius tortor eget efficitur. Nunc dignissim pharetra libero a consectetur. Morbi accumsan ex non rhoncus molestie. In commodo venenatis tortor id interdum. Integer condimentum sapien ac erat venenatis luctus.</p>
          <ul>
            <li><a href="#">Call to Action Link</a></li>
            <li><a href="#">Another Call to Action Link</a></li>
          </ul>
        </HomePageCTA>
        <HomePageCTA src="img/after-college.svg">
          <h2>After College</h2>
          <p>Mauris sapien orci, sagittis vel feugiat varius, scelerisque non urna. In eu massa sapien. Nulla aliquet purus eu nisl vulputate, nec tempus elit pulvinar. Etiam nec egestas leo, id rhoncus augue. In nec sollicitudin turpis. Integer bibendum arcu ut viverra ullamcorper. Duis eleifend congue rhoncus.</p>
          <ul>
            <li><a href="#">Call to Action Link</a></li>
            <li><a href="#">Another Call to Action Link</a></li>
            <li><a href="#">Third Call to Action Link</a></li>
          </ul>
        </HomePageCTA>
      </div>
      <StudentProfiles>
        <h2>Explore Student Profiles</h2>
        <hr />
        <p>Suspendisse sodales tempus vehicula. Nullam in mauris et justo mattis sollicitudin eu non sem. Etiam semper dictum purus sit amet maximus. Phasellus ullamcorper tempor ante, sit.</p>
        <ul>
          <StudentProfile href="http://www.google.com" imgSrc="img/MPxXjTj.jpg">
            <p>Vestibulum tempus elit sit amet nibh blandit, eleifend tristique dolor ornare. Nulla pellentesque cursus turpis, eget gravida arcu euismod id. Etiam mattis eros vitae aliquam dapibus.</p>
            <p><a href="#">Call to Action Link</a></p>
            <p><a href="#">Another Call to Action Link</a></p>
          </StudentProfile>
          <StudentProfile imgSrc="img/4HLZjYB.jpg">
            <p>Vestibulum tempus elit sit amet nibh blandit, eleifend tristique dolor ornare. Nulla pellentesque cursus turpis, eget gravida arcu euismod id. Etiam mattis eros vitae aliquam dapibus.</p>
          </StudentProfile>
          <StudentProfile imgSrc="img/MPxXjTj.jpg">
            <p>Vestibulum tempus elit sit amet nibh blandit, eleifend tristique dolor ornare. Nulla pellentesque cursus turpis, eget gravida arcu euismod id. Etiam mattis eros vitae aliquam dapibus.</p>
          </StudentProfile>
          <StudentProfile imgSrc="img/4HLZjYB.jpg">
            <p>Vestibulum tempus elit sit amet nibh blandit, eleifend tristique dolor ornare. Nulla pellentesque cursus turpis, eget gravida arcu euismod id. Etiam mattis eros vitae aliquam dapibus.</p>
          </StudentProfile>
          <StudentProfile imgSrc="img/MPxXjTj.jpg">
            <p>Vestibulum tempus elit sit amet nibh blandit, eleifend tristique dolor ornare. Nulla pellentesque cursus turpis, eget gravida arcu euismod id. Etiam mattis eros vitae aliquam dapibus.</p>
          </StudentProfile>
        </ul>
      </StudentProfiles>
    </div>
  )
};

const Home = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      title: ''
    };
  },
  render: function() {
    return (
      <Template title="Understanding College Affordability" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('home', Home);

module.exports = Home;
