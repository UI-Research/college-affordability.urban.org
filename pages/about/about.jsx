'use strict';

const React = require('react');
const Template = require('20-templates/default/default.jsx');
const Text = require('30-components/basic/text/text.jsx'),
      FAQ = require('30-components/basic/faq/faq.jsx'),
      BarGraph = require('30-components/graphs/bar/bar.jsx'),
      LineGraph = require('30-components/graphs/line/line.jsx'),
      Box = require('30-components/basic/box/box.jsx');

const util = require('util.jsx');

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
        <Box type="faq" anchor_name="my_box is cool">
          <p>Cras efficitur neque ut nunc molestie malesuada. Integer semper tempor porttitor. Vestibulum nec congue nunc. Aliquam erat volutpat. Curabitur sagittis turpis eu urna interdum convallis. Praesent mollis nisl et leo viverra rhoncus. Ut posuere efficitur magna, eu sodales metus commodo sit amet. Ut a varius justo, sed aliquam ex. Proin sagittis fringilla faucibus. Donec mattis imperdiet purus in dictum. In sollicitudin id tortor id dignissim. Morbi dapibus augue sed mi vestibulum vestibulum. Ut iaculis mi ac nunc sagittis venenatis.</p>
          
          <p>Duis iaculis molestie justo vel feugiat. Phasellus faucibus posuere tincidunt. Sed non rutrum mauris. Duis efficitur, ligula vel eleifend commodo, nulla tellus aliquam metus, eget maximus felis lectus nec ante. Mauris vehicula dignissim mi, ac vehicula lectus maximus ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac condimentum nulla. Vestibulum ultrices sodales dolor, nec condimentum tortor rhoncus sit amet. Nulla vel condimentum turpis. Sed ut tempus quam, sed faucibus arcu.</p>

          <p>Suspendisse felis lacus, fringilla a posuere non, fringilla et turpis. Donec diam nisl, mattis sit amet rutrum in, venenatis a magna. Vivamus mollis sit amet lectus et faucibus. Duis sit amet eros sit amet massa faucibus laoreet quis eget felis. Quisque tristique enim vitae ornare malesuada. Maecenas efficitur lectus vitae ultrices tincidunt. Maecenas sodales convallis orci, in imperdiet enim sodales sit amet. Donec ac nunc a quam rhoncus egestas non vel tellus. Vivamus fermentum, dolor sed eleifend porta, massa ligula semper nisl, at dignissim lacus lectus eu lorem. Mauris imperdiet vehicula magna, id mollis lorem iaculis a. Phasellus pellentesque, dui eu convallis faucibus, est felis tempus arcu, ac aliquam urna ex vitae erat. Aenean interdum pharetra eros, sed fringilla velit eleifend at. Morbi in dolor quam. Maecenas malesuada, orci vel dapibus scelerisque, eros lectus faucibus arcu, a dictum sem odio vitae neque. Aenean condimentum dui eget orci aliquet, varius iaculis dui eleifend. Phasellus mollis nulla at urna hendrerit, vitae laoreet sapien viverra.</p>
        </Box>
        <Box type="factoid" anchor_name="this_box is cool">
          <p>Cras efficitur neque ut nunc molestie malesuada. Integer semper tempor porttitor. Vestibulum nec congue nunc. Aliquam erat volutpat. Curabitur sagittis turpis eu urna interdum convallis. Praesent mollis nisl et leo viverra rhoncus. Ut posuere efficitur magna, eu sodales metus commodo sit amet. Ut a varius justo, sed aliquam ex. Proin sagittis fringilla faucibus. Donec mattis imperdiet purus in dictum. In sollicitudin id tortor id dignissim. Morbi dapibus augue sed mi vestibulum vestibulum. Ut iaculis mi ac nunc sagittis venenatis.</p>
          
          <p>Duis iaculis molestie justo vel feugiat. Phasellus faucibus posuere tincidunt. Sed non rutrum mauris. Duis efficitur, ligula vel eleifend commodo, nulla tellus aliquam metus, eget maximus felis lectus nec ante. Mauris vehicula dignissim mi, ac vehicula lectus maximus ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac condimentum nulla. Vestibulum ultrices sodales dolor, nec condimentum tortor rhoncus sit amet. Nulla vel condimentum turpis. Sed ut tempus quam, sed faucibus arcu.</p>
  
          <p>Suspendisse felis lacus, fringilla a posuere non, fringilla et turpis. Donec diam nisl, mattis sit amet rutrum in, venenatis a magna. Vivamus mollis sit amet lectus et faucibus. Duis sit amet eros sit amet massa faucibus laoreet quis eget felis. Quisque tristique enim vitae ornare malesuada. Maecenas efficitur lectus vitae ultrices tincidunt. Maecenas sodales convallis orci, in imperdiet enim sodales sit amet. Donec ac nunc a quam rhoncus egestas non vel tellus. Vivamus fermentum, dolor sed eleifend porta, massa ligula semper nisl, at dignissim lacus lectus eu lorem. Mauris imperdiet vehicula magna, id mollis lorem iaculis a. Phasellus pellentesque, dui eu convallis faucibus, est felis tempus arcu, ac aliquam urna ex vitae erat. Aenean interdum pharetra eros, sed fringilla velit eleifend at. Morbi in dolor quam. Maecenas malesuada, orci vel dapibus scelerisque, eros lectus faucibus arcu, a dictum sem odio vitae neque. Aenean condimentum dui eget orci aliquet, varius iaculis dui eleifend. Phasellus mollis nulla at urna hendrerit, vitae laoreet sapien viverra.</p>
        </Box>
        <Box type="gasdfpoew" anchor_name="this_box is not cool">
          <p>Cras efficitur neque ut nunc molestie malesuada. Integer semper tempor porttitor. Vestibulum nec congue nunc. Aliquam erat volutpat. Curabitur sagittis turpis eu urna interdum convallis. Praesent mollis nisl et leo viverra rhoncus. Ut posuere efficitur magna, eu sodales metus commodo sit amet. Ut a varius justo, sed aliquam ex. Proin sagittis fringilla faucibus. Donec mattis imperdiet purus in dictum. In sollicitudin id tortor id dignissim. Morbi dapibus augue sed mi vestibulum vestibulum. Ut iaculis mi ac nunc sagittis venenatis.</p>
          
          <p>Duis iaculis molestie justo vel feugiat. Phasellus faucibus posuere tincidunt. Sed non rutrum mauris. Duis efficitur, ligula vel eleifend commodo, nulla tellus aliquam metus, eget maximus felis lectus nec ante. Mauris vehicula dignissim mi, ac vehicula lectus maximus ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac condimentum nulla. Vestibulum ultrices sodales dolor, nec condimentum tortor rhoncus sit amet. Nulla vel condimentum turpis. Sed ut tempus quam, sed faucibus arcu.</p>
  
          <p>Suspendisse felis lacus, fringilla a posuere non, fringilla et turpis. Donec diam nisl, mattis sit amet rutrum in, venenatis a magna. Vivamus mollis sit amet lectus et faucibus. Duis sit amet eros sit amet massa faucibus laoreet quis eget felis. Quisque tristique enim vitae ornare malesuada. Maecenas efficitur lectus vitae ultrices tincidunt. Maecenas sodales convallis orci, in imperdiet enim sodales sit amet. Donec ac nunc a quam rhoncus egestas non vel tellus. Vivamus fermentum, dolor sed eleifend porta, massa ligula semper nisl, at dignissim lacus lectus eu lorem. Mauris imperdiet vehicula magna, id mollis lorem iaculis a. Phasellus pellentesque, dui eu convallis faucibus, est felis tempus arcu, ac aliquam urna ex vitae erat. Aenean interdum pharetra eros, sed fringilla velit eleifend at. Morbi in dolor quam. Maecenas malesuada, orci vel dapibus scelerisque, eros lectus faucibus arcu, a dictum sem odio vitae neque. Aenean condimentum dui eget orci aliquet, varius iaculis dui eleifend. Phasellus mollis nulla at urna hendrerit, vitae laoreet sapien viverra.</p>
        </Box>
        <img src='/img/PSVFcxr.jpg' />
        <BarGraph title="My Bar Chart" file={require('./sample.json')} />
        <LineGraph title="My Line Chart" file={require('./sample.json')} />
        <FAQ title="Frequently Asked Questions" set={faq} />
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

if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('about', About);

module.exports = About;
