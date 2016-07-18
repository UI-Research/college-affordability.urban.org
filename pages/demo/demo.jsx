'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
const Box = require('30-components/box/box/box.jsx');
import SinglePage from '30-components/singlepage/singlepage.jsx';
import jsonMarkup from 'json-markup';

import util from 'util.jsx';

let singlepage = (
  <div>
    <h1>Demo JSONs Page</h1>
    <h2>Graphs</h2>

    <Graph file={require('./json/0010 - single_line.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0010 - single_line.json'))}} />
    </Box>

    <Graph file={require('./json/0020 - multiple_line.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0020 - multiple_line.json'))}} />
    </Box>

    <Graph file={require('./json/0030 - single_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0030 - single_bar.json'))}} />
    </Box>

    <Graph file={require('./json/0032 - single_bar_horizontal.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./0032 - single_bar_horizontal.json'))}} />
    </Box>

    <Graph file={require('./json/0040 - grouped_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0040 - grouped_bar.json'))}} />
    </Box>

    <Graph file={require('./json/0050 - stacked_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0050 - stacked_bar.json'))}} />
    </Box>

    <Graph file={require('./json/0051 - stacked_bar_normalized.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0051 - stacked_bar_normalized.json'))}} />
    </Box>

    <Graph file={require('./json/0060 - grouped_stacked_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0060 - grouped_stacked_bar.json'))}} />
    </Box>

    <Graph file={require('./json/0061 - dual_chart.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0061 - dual_chart.json'))}} />
    </Box>

    <Graph file={require('./json/0070 - stacked_area.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0070 - stacked_area.json'))}} />
    </Box>

    <Multiples title="Small Multiples Example" source="Sample Source" notes="Sample Note">
      <Graph file={require('./json/multiples/multiple - 01.json')} small="true" />
      <Graph file={require('./json/multiples/multiple - 02.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 03.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 01.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 02.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 03.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 01.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 02.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 03.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 01.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 02.json')} small="true"  />
      <Graph file={require('./json/multiples/multiple - 03.json')} small="true"  />
    </Multiples>
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/multiples/multiple - 01.json'))}} />
    </Box>

    <Graph file={require('./json/0080 - scatterplot.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0080 - scatterplot.json'))}} />
    </Box>

    <Graph file={require('./json/0090 - toggles.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0090 - toggles.json'))}} />
    </Box>

    <Graph file={require('./json/0091 - toggles_dual.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0091 - toggles_dual.json'))}} />
    </Box>
  </div>
);

let specifications = {
  'name': 'demo',
  'content': <SinglePage sectionTitle="Demo JSONs" content={singlepage} />
};

const Demo = React.createClass({
  render: function() {
    return (
      <Template title="Demo JSONs" machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});


if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('demo', Demo);

module.exports = Demo;
