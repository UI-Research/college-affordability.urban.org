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

    <h3>General</h3>
    <p>Charts are generally embedded into the content using a simple tag comprised of the following:</p>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;Graph file={require('./my-json-file.json')} /&gt;`}} />
    </Box>

    <h3>Line Charts</h3>
    <p>Line charts are the default graph types used by C3.  You generally don't have to specify the graph type in this case (though this example specifies it anyways for demonstration purposes).</p>
    <p>Data gets populated in the <strong>data</strong> array.  For this project, we expect the data points to be encapsulated in the <strong>columns</strong> array like in the code sample below.  For most single and multiple sets, the format will generally be the same despite the graph type we choose.  Note that the first entry in the array will always be a unique string that will be used as a reference for other parts of the JSON file (e.g. formatting, grouping).</p>
    <p>The <strong>axis</strong> features some basic options you can utilize on the charts for both axes.  The x axis, in this example, features a "type" field which dictates the type of labels we want to use.  They are typically classified as "indexed", "category", and "timeseries".  You will mostly use "category" to define your own custom labels.  The other two options, "indexed" and "timeseries", are used if there are basic patterns with numbers or time respectively.  <a href="http://c3js.org/reference.html#axis-x-type">Reference: axis-x-type</a></p>
    <p>The JSON file format introduces a selection on fields that are non-native to C3 for the purposes of embedding them into this project.  They are the <strong>title</strong> field and <strong>metadata</strong> array.  The two pieces of data are set by the component separate from the C3 diagram for convenience and consistency.</p>

    <Graph file={require('./json/0010 - single_line.json')} image='/img/0010 - single_line.png' />
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

    <h3>Bar Charts</h3>
    <p>Bar graphs are a variant of line graphs with additional configuration considerations.  To simply enable them, you just need to specify that you want to present the data as <strong>bars</strong> within <strong>data.type</strong>.</p>
    <Graph file={require('./json/0030 - single_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0030 - single_bar.json'))}} />
    </Box>

    <p>Rotating the bar chart is easily achieveable by incorporating a new JSON attribute <strong>rotated</strong> in the <strong>axis</strong> array.</p>
    <Graph file={require('./json/0032 - single_bar_horizontal.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0032 - single_bar_horizontal.json'))}} />
    </Box>

    <p>Grouping bar charts requires a structure similar to the <em>multiple line chart example</em> above.  Again, make sure the type is <strong>bar</strong>, and you should get multiple datasets presented together.</p>
    <Graph file={require('./json/0040 - grouped_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0040 - grouped_bar.json'))}} />
    </Box>

    <p>Stacking bar charts requires the same structure as grouped with another set of parameters needed.  In this case, we need to embed another array in <strong>data.grouped</strong>, which contains arrays of unique dataset labels you want grouped together.  Each array represents one group.</p>
    <Graph file={require('./json/0050 - stacked_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0050 - stacked_bar.json'))}} />
    </Box>

    <p>Normalized bar charts are essentially grouped bar charts except the data must be mocked in percentages (more specifically, values under 1).  All data must sum up to 1 (e.g. 0.23 & 0.77, 0.45 & 0.55) to maintain consistent heights for all bars.</p>
    <p>Like in the previous example, the <strong>data.grouped</strong> attribute is needed to keep everything in line together.</p>
    <Graph file={require('./json/0051 - stacked_bar_normalized.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0051 - stacked_bar_normalized.json'))}} />
    </Box>

    <p>The following example displays how bars can be grouped and stacked at the same time.  The concepts are simply merged together in this sample.</p>
    <Graph file={require('./json/0060 - grouped_stacked_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0060 - grouped_stacked_bar.json'))}} />
    </Box>

    <p>Dual charts are stacked bar charts but with data that could appear in one, the other, or both columns.  In essence, you can massage the data to make more pillars with non-distinct data in each bar set.  The important thing to note here is that if you do not want a specific data point to show up in one column, insert a 0 in that slot (that being said, every dataset must have the same number of values, hence the 0 value to pad them).</p>
    <Graph file={require('./json/0061 - dual_chart.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0061 - dual_chart.json'))}} />
    </Box>

    <p>Stacked area charts are essentially multiple line graphs presented in a different fashion.  The key is to change the format of the chart via <strong>data.type</strong> to <strong>area</strong>.  Reference: <a href="http://c3js.org/samples/chart_area_stacked.html">Stacked Area Chart</a></p>
    <Graph file={require('./json/0070 - stacked_area.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0070 - stacked_area.json'))}} />
    </Box>

    <h3>Small Multiples</h3>
    <p>Small Multiples are a collection of small bar graphs.  They essentially reuse the same widgets from the &lt;Graph /&gt; component within another component called &lt;Multiples /&gt;.</p>
    <p>The first code sample shows you how you embed the code into your page.  The main differences are that all the &lt;Graph /&gt; have a new attribute called <strong>small</strong> that requires the value "true" to enable some styling meant for small graphs.  The &lt;Multiples /&gt; tag exhibits three values; <strong>title</strong>, which correlates with the title of the entire set, <strong>source</strong> which is your sources field, and <strong>notes</strong>, which is your notes field (the metadata array).  This was designed custom for this edge case.</p>

    <Multiples title="Small Multiples Example" source="Sample Source" notes="Sample Note">
      <Graph file={require('./json/multiples/multiple - 01.json')} small="true" />
      <Graph file={require('./json/multiples/multiple - 02.json')} small="true" />
      <Graph file={require('./json/multiples/multiple - 03.json')} small="true" />
    </Multiples>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;Multiples title=&quot;Small Multiples Example&quot; source=&quot;Sample Source&quot; notes=&quot;Sample Note&quot;&gt;
  &lt;Graph file={require('./json/multiples/multiple - 01.json')} small=&quot;true&quot; /&gt;
  &lt;Graph file={require('./json/multiples/multiple - 02.json')} small=&quot;true&quot; /&gt;
  &lt;Graph file={require('./json/multiples/multiple - 03.json')} small=&quot;true&quot; /&gt;
&lt;/Multiples&gt;`}}>
      </pre>
    </Box>
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/multiples/multiple - 01.json'))}} />
    </Box>

    <h3>Scatterplots</h3>
    <p>Scatterplots are essentially formed like any other single sets of data.  Just set <strong>data.type</strong> to <strong>scatterplot</strong>.</p>
    <Graph file={require('./json/0080 - scatterplot.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0080 - scatterplot.json'))}} />
    </Box>

    <h3>Toggles</h3>
    <p>Toggles are a special feature in this system that allows you to have multiple graph sets togglable within the same chart plane.  <em>The configuration surrounding the datasets are assumed to be the same</em>, so we want to avoid trying to incorporate too many variances between the different datasets (though some transformations can be done in a clever manner).</p>
    <p>To support this, we introduce a new attribute within the <strong>data</strong> called <strong>sets</strong>.  They include entries with their own unique labels not used by C3 but by the dropdown labels in the widget.  Essentially, the component willl transfer the data array for the chosen set and put them within <strong>data.columns</strong> automatically.</p>

    <Graph file={require('./json/0090 - toggles.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0090 - toggles.json'))}} />
    </Box>

    <p>Another implementation of toggles that supports <em>multiple</em> data sets in the same plane.  You'll notice that the <strong>sets</strong> array includes an additional array dimension to support the extra data.  The <strong>categories</strong> axis type can be used to label the bars.</p>
    <Graph file={require('./json/0091 - toggles_dual.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0091 - toggles_dual.json'))}} />
    </Box>
  </div>
);

let specifications = {
  'name': 'demo',
  'title': 'Demo JSONS',
  'content': <SinglePage sectionTitle="Demo JSONs" content={singlepage} />
};

const Demo = React.createClass({
  render: function() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
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
