# README #

This repository encompasses the Urban College Affordability Static Site Generation Project.

## Set up ##

1. Install Homebrew (http://brew.sh/)
1. Install node (brew install node)
1. Install npm (sudo npm install npm -g)
1. Install all dependencies (npm install)

## How do I get started? ##

This is a static site generator.  Webpack handles the compilation and bundling of static assets for use in production.  You can reference gulpfile.js for the list of commands you can use locally, but to compile all your assets (and your new changes) run the following:
```
#!gulp
gulp
```
or if you'd like to incorporate a watch into your development workflow...
```
#!gulp
gulp watch
```

Pro-tips
* The directory structure is set up in order. Files in the top level directory (/00-global) will be concatenated before a file in a lower level directory (30-components).  Keep this in mind when you determine priority in your CSS.

## Contribution guidelines ##

...

## Who do I talk to? ##

* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski