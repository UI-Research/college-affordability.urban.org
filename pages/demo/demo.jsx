'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
import Box from '30-components/box/box/box.jsx';
import ActionButton from '30-components/basic/action_button/action_button.jsx';
import Alerts, { Alert } from '30-components/basic/alerts/alerts.jsx';
import LazyLoad from '30-components/basic/lazyload/lazyload.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';
import jsonMarkup from 'json-markup';

import util from 'util.jsx';

let singlepage = (
  <div>
    <h1>Demo JSONs Page</h1>

    <h2>Components</h2>
    <h3>General</h3>
    <p><em>For more information, refer to EDITING.md within this site's repository.</em>  This system is comprised of a collection of react components that is meant to simplify your editing experience when creating new pages.  They are all contained within the <strong>components/</strong> directory in the project.</p>
    <p>You may not have to tap into the components directory unless you intend on creating your own react component.  This can be achieved by referencing an existing component and referring to the existing react documentation for guidelines and best practices.  <a href="https://facebook.github.io/react/docs/getting-started.html">React - Getting Started</a></p>


    <h3>Basics</h3>
    <p>Including a component is easy!  It essentially requires a two step process (for performance reasons), but you should be able to reference this page for easy code snippets.  Essentially:</p>
    <ol>
      <li>Include the <strong>import</strong> statement at the top of the file (with the other import statements).</li>
      <li>Include the tag within the JSX code below.</li>
    </ol>
    <p>In most cases, you'll mostly do two, but if a page fails to compile, always make sure it's declared at the top of the page first.  <em>THIS DOES NOT APPLY TO HTML5 DOM ELEMENTS.  THEY ARE ACCEPTED IN CORE AND NO IMPORT STATEMENT IS NEEDED (e.g. &lt;article /&gt;, &lt;footer /&gt;, &lt;div /&gt;).</em></p>
    <p>The following examples will include both steps to including the snippet into your payload.  As long as you follow this pattern, reuseable components should integrate seemlessly into your pages.</p>

    <h3>Box(es)</h3>
    <p>Boxes are expandable blocks that contain miscellaneous information readers can expand if they have increased interested on a specific topic.  They show the first 4-5 lines for the purpose of divulging a synopsis of the content with a convenient collapse/expand toggle.</p>
    <p>Boxes can potentially embed other components as well!  Try embedding a &lt;Graph /&gt; tag inside one!</p>
    <h4>Import</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `import Box from '30-components/box/box/box.jsx';`}} />
    </Box>
    <h4>Markup</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;Box&gt;
  Your content here...
&lt;/Box&gt;`}} />
    </Box>

    <h3>Action Button(s)</h3>
    <p>Action buttons exist to provide a large, haptic button for users to interact with when they want to access another page.  They are commonly used in &lt;Graph /&gt;, but you can use it on your own content, too.  These are simple &lt;a&gt; tags, so all attributes related to creating a link still applies.</p>
    <h4>Attributes</h4>
    <ul>
      <li>title: Label used on button</li>
      <li>href: URL where button will lead to</li>
      <li>disable: Whether to show the button as disabled and unclickable.</li>
    </ul>
    <h4>Example</h4>
    <ActionButton title='Disabled Button' href="#" disable="true" />
    <br/>
    <ActionButton title='Working Button' href='#' />
    <h4>Import</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `import ActionButton from '30-components/basic/action_button/action_button.jsx';`}} />
    </Box>
    <h4>Markup</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;ActionButton title=&apos;Disabled Button&apos; href=&quot;#&quot; disable=&quot;true&quot; /&gt;
&lt;br/&gt;
&lt;ActionButton title=&apos;Working Button&apos; href=&apos;#&apos; /&gt;`}} />
    </Box>

    <h3>Alerts</h3>
    <p>Alerts are notification messages that intend to stand out to inform the user of time-sensitive information.  They are comprised of a collection of components you can use to create standardized-styled items for the users to consume.</p>
    <p>This component requires two items to be imported using the following convenient statement.</p>
    <h4>Example</h4>
    <Alerts>
      <Alert>
        <p><strong>07/05/2016</strong> :: Example text can be a combination of <a href="#">site links</a> and a description of changes.</p>
      </Alert>
      <Alert>
        <p><strong>06/30/2016</strong> :: Suspendisse iaculis, tortor id convallis eleifend, magna magna interdum augue, ac pulvinar elit purus.</p>
      </Alert>
      <Alert>
        <p><strong>06/18/2016</strong> :: Donec a hendrerit dolor. In hac habitasse platea dictumst. Pellentesque ut pretium ante, fringilla cursus nulla.</p>
      </Alert>
    </Alerts>
    <h4>Import</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `import Alerts, { Alert } from '30-components/basic/alerts/alerts.jsx';`}} />
    </Box>
    <h4>Markup</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;Alerts&gt;
  &lt;Alert&gt;
    &lt;p&gt;&lt;strong&gt;07/05/2016&lt;/strong&gt; :: Example text can be a combination of &lt;a href=&quot;#&quot;&gt;site links&lt;/a&gt; and a description of changes.&lt;/p&gt;
  &lt;/Alert&gt;
  &lt;Alert&gt;
    &lt;p&gt;&lt;strong&gt;06/30/2016&lt;/strong&gt; :: Suspendisse iaculis, tortor id convallis eleifend, magna magna interdum augue, ac pulvinar elit purus.&lt;/p&gt;
  &lt;/Alert&gt;
  &lt;Alert&gt;
    &lt;p&gt;&lt;strong&gt;06/18/2016&lt;/strong&gt; :: Donec a hendrerit dolor. In hac habitasse platea dictumst. Pellentesque ut pretium ante, fringilla cursus nulla.&lt;/p&gt;
  &lt;/Alert&gt;
&lt;/Alerts&gt;`}} />
    </Box>

    <h3>Lazy Loading</h3>
    <p>This component serves no content-related purposes besides delaying loading of heavy content until the user scrolls to that part of the page.  At that point, anything inside the component will fade into view (while loading on the spot).</p>
    <h4>Attributes</h4>
    <h4>Example</h4>
    <LazyLoad>
      <img src="/img/female-student-using-laptop-for-taking-notes-to-study.jpg" />
    </LazyLoad>
    <h4>Import</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `import LazyLoad from '30-components/basic/lazyload/lazyload.jsx';`}} />
    </Box>
    <h4>Markup</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;LazyLoad&gt;
  Your content here...
&lt;/LazyLoad&gt;`}} />
    </Box>

    <h3>Images</h3>
    <p>Images are nothing different from what you're familiar with in HTML.  Feel free to add your images to your pages directories, and gulp will transfer them into the /img directory within your /dist artifacts directory.  In which case, you will need to refer to them using the base path: /img/my-image.png.</p>
    <h4>Example</h4>
    <img src="/img/female-student-using-laptop-for-taking-notes-to-study.jpg" />
    <h4>Import</h4>
    <Box>
      <em>None needed</em>
    </Box>
    <h4>Markup</h4>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        `&lt;img src=&quot;/img/female-student-using-laptop-for-taking-notes-to-study.jpg&quot; /&gt;`}} />
    </Box>


    <h3>Single Page</h3>
    <p><em>This page is an example of a &lt;SinglePage /&gt; component.</em>  Essentially, start with <strong>__TEMPLATE__</strong> as your starting point within the <strong>/pages</strong> directory.  That scaffolds this element out right away.  There should be comments for you to follow to smoothly start a new page.</p>
    <p>Some notes:</p>
    <ul>
      <li>&lt;SinglePage /&gt; requires a large JSX object.  It will do the work on populating the menu for you as long as you utilize &lt;h2&gt; and &lt;h3&gt; tags properly.  If you don't want the headers to show in the menu, utilize anything beyond &lt;h4&gt;.</li>
      <li>This component will automatically track the user's progress on the page by updating the breadcrumb, the highlighting of the menu item and their sub categories, and the URL.</li>
      <li>The menu and content will adapt responsively.  The menu will turn into a fixed widget on the screen after it gets to a smaller size</li>
    </ul>

    <hr />
    <h2>Graphs</h2>

    <h3>General</h3>
    <p>Charts are generally embedded into the content using a simple tag comprised of the following:</p>
    <Box>
      <pre dangerouslySetInnerHTML={{__html:
        '&lt;Graph file={require(&#39;./my-json-file.json&#39;)} /&gt;'}} />
    </Box>

    <h3>Line Charts</h3>
    <p>Line charts are the default graph types used by C3.  You generally don't have to specify the graph type in this case (though this example specifies it anyways for demonstration purposes).  <a href="http://c3js.org/samples/simple_multiple.html">Reference: Line Chart</a></p>
    <p>Data gets populated in the <strong>data</strong> array.  For this project, we expect the data points to be encapsulated in the <strong>columns</strong> array like in the code sample below.  For most single and multiple sets, the format will generally be the same despite the graph type we choose.  Note that the first entry in the array will always be a unique string that will be used as a reference for other parts of the JSON file (e.g. formatting, grouping).</p>
    <p>The <strong>axis</strong> features some basic options you can utilize on the charts for both axes.  The x axis, in this example, features a "type" field which dictates the type of labels we want to use.  They are typically classified as "indexed", "category", and "timeseries".  You will mostly use "category" to define your own custom labels.  The other two options, "indexed" and "timeseries", are used if there are basic patterns with numbers or time respectively.  <a href="http://c3js.org/reference.html#axis-x-type">Reference: axis-x-type</a></p>
    <p>The JSON file format introduces a selection on fields that are non-native to C3 for the purposes of embedding them into this project.  They are the <strong>title</strong> field and <strong>metadata</strong> array.  The two pieces of data are set by the component separate from the C3 diagram for convenience and consistency.</p>

    <Graph file={require('./json/0010 - single_line.json')} image='/img/0010 - single_line.png' />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0010 - single_line.json'))}} />
    </Box>

    <p><strong>Negative values</strong> are supported by default by the component.  It should attempt to automatically detect if they exist.  If so, the rule regarding the y axis minimum being set at 0 will be overridden, and the y axis minimum will be automatically determined by C3.  (In general, there's no need to do anything on your end).</p>

    <Graph file={require('./json/0011 - single_line_negative.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0010 - single_line.json'))}} />
    </Box>

    <p>You can incorporate multiple data sets by adding additional arrays to the <strong>columns</strong> array.  Use the same format, and separate each dataset with a comma.</p>
    <p>The <strong>data</strong> array includes a <strong>labels</strong> array which dictates the formatting style we want to use on the values of the dataset.  Currently, we default to using the d3.format() function as it utilizes a stringf library to take care of all of our use cases (at the time).  <a href="http://c3js.org/samples/axes_x_tick_format.html">Reference: X Axis Tick Format</a></p>
    <p>The <strong>labels</strong> array also supports convenient aliases from the component layer.  Essentially, typing in either <strong>dollar</strong>, <strong>percent</strong>, or <strong>number</strong> will rewrite the values to the correct format (thousandth separator, dollar signs, percents, more) based on the Urban guidelines.  <em>More can be supported simply by adding a new case within <strong>/helpers/formatting.jsx</strong> within the code repository.</em></p>
    <p>The <strong>axes</strong> in the following example supports <strong>categories</strong>.  As previously mentioned, it allows the ability to incorporate custom labels into your dataset.  Each entry correlates directly with the spots in the data arrays in the <strong>data.columns</strong> array above it.  <a href="http://c3js.org/samples/categorized.html">Reference: Category Axis</a></p>

    <Graph file={require('./json/0020 - multiple_line.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0020 - multiple_line.json'))}} />
    </Box>

    <p>If your graph is using a consistent pattern, you can utilize C3's culling configuration, which allows you to kill certain intervals of labels.  By default, C3 does its due diligence to do this for you.  However, for more fine control over this, refer to this link <a href="http://c3js.org/samples/axes_x_tick_culling.html">Reference: X Axis Tick Culling</a></p>
    <Graph file={require('./json/0015 - single_line_cull.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0015 - single_line_cull.json'))}} />
    </Box>

    <h3>Bar Charts</h3>
    <p>Bar graphs are a variant of line graphs with additional configuration considerations.  To simply enable them, you just need to specify that you want to present the data as <strong>bars</strong> within <strong>data.type</strong>.  <a href="http://c3js.org/samples/chart_bar.html">Reference: Bar Chart</a></p>

    <Graph file={require('./json/0030 - single_bar.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0030 - single_bar.json'))}} />
    </Box>

    <p>Again, here's an example of a bar chart with <strong>negative values</strong>.</p>

    <Graph file={require('./json/0031 - single_bar_negative.json')} />
    <Box>
      <h3>Code Sample</h3>
      <div dangerouslySetInnerHTML={{__html: jsonMarkup(require('./json/0030 - single_bar.json'))}} />
    </Box>

    <p>Rotating the bar chart is easily achieveable by incorporating a new JSON attribute <strong>rotated</strong> in the <strong>axis</strong> array.  <a href="http://c3js.org/samples/axes_rotated.html">Reference: Rotated Axis</a></p>
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

    <p>Stacking bar charts requires the same structure as grouped with another set of parameters needed.  In this case, we need to embed another array in <strong>data.grouped</strong>, which contains arrays of unique dataset labels you want grouped together.  Each array represents one group.  <a href="http://c3js.org/samples/chart_bar_stacked.html">Reference: Stacked Bar Chart</a></p>
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
    <p>Scatterplots are essentially formed like any other single sets of data.  Just set <strong>data.type</strong> to <strong>scatterplot</strong>.  <a href="http://c3js.org/samples/chart_scatter.html">Reference: Scatter Plot</a></p>
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
  'title': 'Demo Page',
  'content': <SinglePage sectionTitle="Demo Page" content={singlepage} />
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
