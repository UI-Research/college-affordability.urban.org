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

### Manual Deploy ###

*NOTE: This is deprecated in favor of our CI deployment pipelines (see below). If you want to deploy manually to the live s3 bucket, you will need to modify the `gulp deploy` command in gulpfile.js.*

Deploying is easy, however you do need to install the aws-cli tool to perform operations on the server including uploading and clearing out buckets.  If this is your first time deploying, install aws-cli via the instructions here: https://aws.amazon.com/cli/

Once you have that all set, you need active credentials to hook up to a working S3 bucket.  If that's set up (if not, contact your system administrator), simply instantiate the credentials within your system accounts' configuration (on a Mac, it's located in ~/.aws).

If all is good, you should be able to do deploys using the following command:

```
gulp deploy
```

### Continuous Integration ###
The repository is hooked up to Urban's codeship account.  It continuously deploys new changes whenever code changes are pushed to designated branches.

Currently, our deployment branches are as follows:

* *develop* -> s3://collegeaffordability-stg.s3-website-us-east-1.amazonaws.com (staging instance until further notice)
* *live* -> s3://collegeaffordability.urban.org (live, production site)

Since we are deploying to different servers with different access keys, we export the environment variables within each deployment pipeline. Here is an example of our deployment script.

```
export AWS_ACCESS_KEY_ID=[A Key ID]
export AWS_SECRET_ACCESS_KEY=[A Secret Access Key]
export AWS_DEFAULT_REGION=[A Default Region]
npm rebuild node-sass
gulp
aws s3 rm s3://collegeaffordability.urban.org/ --recursive;
aws s3 cp ./dist s3://collegeaffordability.urban.org --recursive
```

You can view and edit the Codeship Development Pipelines [here](https://app.codeship.com/projects/160168/deployment_branches/166333)

Reference: https://cwhite.me/continuous-delivery-for-your-static-site-with-codeship/

### I want to change my AWS configurations ###
--When you are ready to deploy the site to production with your new S3 bucket set up, take note of the bucket name, aws_access_key_id, aws_secret_access_key, aws_default_region, and edit the gulpfile.js file to reflect the new configurations.  Navigate to the task ">> gulp deploy-assets" (this quoted string should be a comment in the file), and update the command appropriately.--



## Who do I talk to? ##

* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski
