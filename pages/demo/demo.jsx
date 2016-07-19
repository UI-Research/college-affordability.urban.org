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

    <h3>Line Charts</h3>
    <p>Line charts are the default graph types used by C3.  You generally don't have to specify the graph type in this case (though this example specifies it anyways for demonstration purposes).</p>
    <p>Data gets populated in the <strong>data</strong> array.  For this project, we expect the data points to be encapsulated in the <strong>columns</strong> array like in the code sample below.  For most single and multiple sets, the format will generally be the same despite the graph type we choose.  Note that the first entry in the array will always be a unique string that will be used as a reference for other parts of the JSON file (e.g. formatting, grouping).</p>
    <p>The <strong>axis</strong> features some basic options you can utilize on the charts for both axes.  The x axis, in this example, features a "type" field which dictates the type of labels we want to use.  They are typically classified as "indexed", "category", and "timeseries".  You will mostly use "category" to define your own custom labels.  The other two options, "indexed" and "timeseries", are used if there are basic patterns with numbers or time respectively.  <a href="http://c3js.org/reference.html#axis-x-type">Reference: axis-x-type</a></p>
    <p>The JSON file format introduces a selection on fields that are non-native to C3 for the purposes of embedding them into this project.  They are the <strong>title</strong> field and <strong>metadata</strong> array.  The two pieces of data are set by the component separate from the C3 diagram for convenience and consistency.</p>

    <Graph file={require('./json/0010 - single_line.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0010 - single_line.json'))}} />
    </Box>

    <p>You can incorporate multiple data sets by adding additional arrays to the <strong>columns</strong> array.  Use the same format, and separate each dataset with a comma.</p>
    <p>The <strong>data</strong> array includes a <strong>labels</strong> array which dictates the formatting style we want to use on the values of the dataset.  Currently, we default to using the d3.format() function as it utilizes a stringf library to take care of all of our use cases (at the time).</p>
    <p>The <strong>labels</strong> array also supports convenient aliases from the component layer.  Essentially, typing in either <strong>dollar</strong>, <strong>percent</strong>, or <strong>number</strong> will rewrite the values to the correct format (thousandth separator, dollar signs, percents, more) based on the Urban guidelines.  <em>More can be supported simply by adding a new case within <strong>/helpers/formatting.jsx</strong> within the code repository.</em></p>
    <p>The <strong>axes</strong> in the following example supports <strong>categories</strong>.  As previously mentioned, it allows the ability to incorporate custom labels into your dataset.  Each entry correlates directly with the spots in the data arrays in the <strong>data.columns</strong> array above it.</p>

    <Graph file={require('./json/0020 - multiple_line.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0020 - multiple_line.json'))}} />
    </Box>

    <h3>Bar Graphs</h3>
    <Graph file={require('./json/0030 - single_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0030 - single_bar.json'))}} />
    </Box>

    <Graph file={require('./json/0032 - single_bar_horizontal.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0032 - single_bar_horizontal.json'))}} />
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
