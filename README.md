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

### Continuous Integration ###
The repository is hooked up to Urban's codeship account.  It continuously deploys new changes whenever there's a change to the repo (read note below).  To trigger a change to the staging environment, simply merge a branch to develop and AWS will be updated with the new code changes.

Note: Because of our set up, Codeship triggers a deploy whenever a commit happens on ANY branch.  I tried to target a specific branch "master", but either I am misinterpreting the configurations or there is something I don't know.  For general purposes, it does CI, but a little more liberally.
^^This is resolved . . .TODO: update README.md.

The shell script is all embedded within the Test Settings (https://codeship.com/projects/160168/configure_tests).  For future reference, here is the script in use.  When you change your staging and production environment, you may have to make a change here to reflect your new server configurations:

```
cd ~/clone
npm install
npm rebuild node-sass
gulp
aws s3 rm s3://urban-ca.dev.phase2tech.com/ --recursive;
aws s3 cp ./dist s3://urban-ca.dev.phase2tech.com --recursive
```

Also, go to the environment variables configuration page (https://codeship.com/projects/160168/configure_environment) to add your own AWS credentials.

Reference: https://cwhite.me/continuous-delivery-for-your-static-site-with-codeship/

### I want to change my AWS configurations ###
When you are ready to deploy the site to production with your new S3 bucket set up, take note of the bucket name, aws_access_key_id, aws_secret_access_key, aws_default_region, and edit the gulpfile.js file to reflect the new configurations.  Navigate to the task ">> gulp deploy-assets" (this quoted string should be a comment in the file), and update the command appropriately.

You may have to do the same thing within Codeship (described above) to further update your set up.

## Who do I talk to? ##

* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski
