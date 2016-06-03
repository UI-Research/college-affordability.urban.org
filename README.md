# README #

This repository encompasses the Urban College Affordability Static Site Generation Project.

## Set up ##

1. Install Homebrew (http://brew.sh/)
1. Install node (brew install node)
1. Install npm (sudo npm install npm -g)
1. Install all dependencies (npm install)

## How do I get started? ##

This is a static site generator.  Out of the box, you should be able to execute the following to create a site based on custom components in the repo:


```
#!gulp
gulp
```


## How do I start developing? ##

### SASS ###
CSS is managed as separate .scss files throughout the /components directory. Create any .scss file there and gulp will poll it and include it with the major artifact.

To compile the sass files into a single compressed file in /dist, execute the following:
```
#!gulp
gulp sass
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