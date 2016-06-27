# README #

This repository encompasses the Urban College Affordability Static Site Generation Project.

## Set up ##

1. Install Homebrew (http://brew.sh/)
1. Install node (brew install node)
1. Install npm (sudo npm install npm -g)
1. Install all dependencies (npm install)
1. Install imagemagick on your machine (Refer to https://github.com/scalableminds/gulp-gm/blob/master/README.md for information on installing it on your machine).

## How do I get started? ##

This is a static site generator.  Webpack handles the compilation and bundling of static assets for use in production.  You can reference gulpfile.js for the list of commands you can use locally, but to compile all your assets (and your new changes) run the following:
```
gulp
```
or if you'd like to incorporate a watch into your development workflow...
```
gulp watch
```

Pro-tips
* The directory structure is set up in order. Files in the top level directory (/00-global) will be concatenated before a file in a lower level directory (30-components).  Keep this in mind when you determine priority in your CSS.

## How do I edit content? ##

Refer to the EDITING.md in this repository for guidelines.

## Deploying to AWS ##
*Note: We currently have a staging environment.  This will get updated again once we get the other environments up and running.*

Deploying is easy, however you do need to install the aws-cli tool to perform operations on the server including uploading and clearing out buckets.  If this is your first time deploying, install aws-cli via the instructions here: https://aws.amazon.com/cli/

Once you have that all set, you need active credentials to hook up to a working S3 bucket.  If that's set up (if not, contact your system administrator), simply instantiate the credentials within your system accounts' configuration (on a Mac, it's located in ~/.aws).

If all is good, you should be able to do deploys using the following command:

```
gulp deploy
```

## Who do I talk to? ##

* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski
