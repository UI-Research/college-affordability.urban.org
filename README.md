

# README

This repository encompasses the Urban Institute College Affordability Static Site Generation Project.

## Background information
This is a static site generator.  Webpack handles the compilation and bundling of static assets for use in production. To get up to speed on this project it would be helpful to have a working understanding of how gulp and webpack work (this is the build/compiling technology), and how ReactJS works (this is the tool for building modular components, which is used extensively for the charts and pages). It is not crucial to understand them in depth or to be an expert, but it would be helpful to have a cursory understanding.

## Set up

To be able to **generate and serve the college affordability site**
1. Clone this repo
2. Install Homebrew (http://brew.sh/)
3. Install node with `brew install node` 
4. Install n (see below*) and switch to v6 of node
5. Install npm with `sudo npm install npm -g`
6. Install all dependencies `npm install`
7. Install imagemagick on your machine (Refer to https://github.com/scalableminds/gulp-gm/blob/master/README.md for information on installing it on your machine).


**Tested with node v6. Codeship is configured for node v6. If you are experiencing deployment issues, check your node version. To control the version of node in use, you can use a node version control manager like [n](https://www.npmjs.com/package/n)*

To **set up the process to combine data and metadata into jsons for the above to use in charts**


1. Install or make sure you have: R, Python 3
2. RStudio is helpful for interfacing with R...it can be downloaded here: https://www.rstudio.com/products/rstudio/download3/
3. Install Rscript if you don't have it already. (ensure you have it by typing `which Rscript`. 
4. In R, install the dependencies via this command: `install.packages(c("dplyr", "tidyr", "stringr", "Hmisc", "openxlsx", "readxl"))`

## How do I get started?

You can reference gulpfile.js for the list of commands you can use locally, but to compile all your assets (and your new changes) run the following:
```
gulp
```
This compiles all of the information in `pages` into the `dist` folder.

In order to view the content of the site locally, cd into the `dist` folder and then run:

```
http-server
```

Ideally, you would be able to incorporate a watch into your development workflow. If it worked, it would be utilized by running this command:
```
gulp watch
```
Unfortunately, this command is currently not working, due to its age and some out-of-date dependencies. I (Dan Wood) haven't had the chance to troubleshoot this, so gulp watch is not working. But an enterprising developer could update/debug this command if so desired.

Pro-tips
* The directory structure is set up in order. Files in the top level directory (/00-global) will be concatenated before a file in a lower level directory (30-components).  Keep this in mind when you determine priority in your CSS.

## How do I edit content?

Refer to the EDITING.md in this repository for guidelines of how to edit and create charts and pages in the manual way. The site is made up of pages and components. As an editor, you will mostly edit files within the `/pages` directory and point to elements within components to simplify certain content entry. See more there, if you aim to do things manually.

There are several processes for updating and editing different aspects of this project.

### Editing text

Editing text requires a working knowledge of 

Editing main pages
Editing special pages (chart index, works cited, etc)

### Editing charts

#### Chart data
Location
Naming schema
Quirks

#### Chart metadata, titles, sources, etc
Location
Quirks
Macro for finding/replacing problematic characters

### Updating `dist` folder

Make clearer!!!!!DAN
- Make sure data/is up to date
- Update R script to reference up to date name of GraphText.xlsx
- Run R Script

Whenever you've made changes to either the data or the GraphText file, you have to rerun the R script AND the gulp process


## Deploying to AWS

### Manual Deploy

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

### I want to change my AWS configurations
--When you are ready to deploy the site to production with your new S3 bucket set up, take note of the bucket name, aws_access_key_id, aws_secret_access_key, aws_default_region, and edit the gulpfile.js file to reflect the new configurations.  Navigate to the task ">> gulp deploy-assets" (this quoted string should be a comment in the file), and update the command appropriately.--



## Who do I talk to?
* Ben Chartoff for editing charts, overarching code questions, and process questions.
* Jerry Ta for updating/editing text, download images, etc.

Formerly:
* Daniel Wood (was at Urban)
* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski
