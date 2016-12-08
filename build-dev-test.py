import fnmatch
import os
import shutil
import re

rootPath = 'pages'
destDir = 'pages/dev-test/json'
filelist = [ f for f in os.listdir(destDir) if f.endswith(".json") ]
for f in filelist:
    os.remove(os.path.join(destDir,f))

for root, dirnames, filenames in os.walk(rootPath):
	for filename in fnmatch.filter(filenames, '*.json'):
		fullPath = os.path.join(root, filename)
		if fullPath.find("dev-test") != -1 or fullPath.find("demo") != -1 or fullPath.find("data-viz-example") != -1 or fullPath.find("persona-example") != -1:
			continue
		shutil.copy(fullPath, os.path.join(destDir, filename))


jsx = open('pages/dev-test/dev-test.jsx','w')
jsx.write('\'use strict\';\n\nimport React from \'react\';\nimport Template from \'20-templates/default/default.jsx\';\nimport Graph from \'30-components/graphs/graph/graph.jsx\';\nimport Multiples from \'30-components/graphs/multiples/multiples.jsx\';\nimport Box from \'30-components/box/box/box.jsx\';\nimport SinglePage from \'30-components/singlepage/singlepage.jsx\';import util from \'util.jsx\';\n\n')

jsx.write('let singlepage = (\n<div>\n')

pattern = re.compile("\<Graph file=\{require\(\'(.*?)\'\)\}.*?\>")

for root, dirnames, filenames in os.walk(rootPath):
	for filename in fnmatch.filter(filenames, '*.jsx'):
		fullPath = os.path.join(root, filename)
		if fullPath.find("dev-test") != -1 or fullPath.find("demo") != -1 or fullPath.find("data-viz-example") != -1 or fullPath.find("persona-example") != -1:
			continue
		for i, line in enumerate(open(fullPath)):
			for match in re.finditer(pattern, line):
				jsx.write("<h2>")
				jsx.write(fullPath)
				jsx.write("</h2>\n")
				jsx.write("<h2>")
				jsx.write(match.group(1))
				jsx.write("</h2>\n")
				jsx.write(match.group(0) + '\n')

jsx.write("</div>\n);\n")


jsx.write("let specifications = {\n  \'name\': \'dev-test\',\n  \'title\': \'Dev Test\',\n  \'content\': <SinglePage content={singlepage} />\n};\n\nconst DevTest = React.createClass({\n  render: function() {\n    return (\n      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>\n        {specifications.content}\n      </Template>\n    );\n  }\n});\nif (util.canUseDOM()) {\n  require(\'./\' + specifications.name.toLowerCase() + \'.scss\');\n}\nutil.printToPage(\'dev-test\', DevTest);\n\nmodule.exports = DevTest;")
jsx.close()