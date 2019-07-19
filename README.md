


# README

This repository encompasses the Urban Institute College Affordability Static Site Generation Project.

## Background information
This is a static site generator.  Webpack handles the compilation and bundling of static assets for use in production. To get up to speed on this project it would be helpful to have a working understanding of how gulp and webpack work (this is the build/compiling technology), and how ReactJS works (this is the tool for building modular components, which is used extensively for the charts and pages). It is not crucial to understand them in depth or to be an expert, but it would be helpful to have a cursory understanding.

## Workflow

For each of the following steps, detailed instructions can be found by following the links. 

1. Dev: [Set up](#set-up) your machine for generating the static site and transforming the data into the static site.
2. Research: The research team will [gather and edit data](#editing-data) and place it in the  [data_scripts/data/](data_scripts/data/) folder, or short of that, giving it directly to the developer to add to that folder.
3. Dev: [add/edit text](#editing-text) given by the Research team.
4. Researcher: update all chart related text (sources, notes, titles, subtitles, etc.) in GraphText file found in [this folder](data_scripts/scripts).
5. Dev: [edit charts](#editing-charts) using the updated GraphText file.
6. Dev: [Run the R and Gulp scripts](#running-r-with-gulp-together) to see your changes locally
7. Dev: Push changes and merge this working branch into the `develop` branch in order to view on [http://collegeaffordability-stg.s3-website-us-east-1.amazonaws.com](http://collegeaffordability-stg.s3-website-us-east-1.amazonaws.com/)
8. Research/Copyedit: Copyediting and spot check text, data, charts
9. Dev: Once everything is correct, developer will [update screenshots and check data downloads](#downloadable-screenshots-and-data).
10. Dev: Push live by merging `develop` branch into the `live` branch.  

## Set up

To be able to **generate and serve the college affordability site**
1. Clone this repo
2. Install Homebrew (http://brew.sh/)
3. Install node with `brew install node` 
4. Install n (see below*) and switch to v6 of node
5. Install npm with `sudo npm install npm -g`
6. Install all dependencies `npm install`
7. Install imagemagick on your machine (Refer to https://github.com/scalableminds/gulp-gm/blob/master/README.md for information on installing it on your machine).
8. Then follow [these directions](#how-do-i-get-started) to use gulp

**Tested with node v6. Codeship is configured for node v6. If you are experiencing deployment issues, check your node version. To control the version of node in use, you can use a node version control manager like [n](https://www.npmjs.com/package/n)*

To **set up the process to combine data and metadata into jsons for the above to use in charts**


1. Install or make sure you have: R, Python 3
2. RStudio is helpful for interfacing with R...it can be downloaded here: https://www.rstudio.com/products/rstudio/download3/
3. Install Rscript if you don't have it already. (ensure you have it by typing `which Rscript`. 
4. In R, install the dependencies via this command: 
	- `install.packages(c("dplyr", "tidyr", "stringr", "Hmisc", "openxlsx", "readxl"))`
5. Then follow [these directions](#running-r-scripts) to use the R scripts

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
Unfortunately, this command is currently not working, due to its age and some out-of-date dependencies. I (Dan Wood) haven't had the chance to troubleshoot this, so `gulp watch `is not working. But an enterprising developer could update/debug this command if so desired (perhaps Mark Sutton can fix this?). 

Pro-tips
* The directory structure is set up in order. Files in the top level directory (/00-global) will be concatenated before a file in a lower level directory (30-components).  Keep this in mind when you determine priority in your CSS.

## How do I edit content?

Refer to the EDITING.md in this repository for guidelines of how to edit and create charts and pages in the manual way. The site is made up of pages and components. As an editor, you will mostly edit files within the `pages/` directory and point to elements within components to simplify certain content entry. See more there, if you aim to do things manually.

There are several processes for updating and editing different aspects of this project.

### Editing text

Editing text is as simple as finding the appropriate .jsx file within the `pages/` directory and editing it to reflect the new text, using the HTML for things like paragraph, header, and italics tags. This should be done by the developer. **Do not forget to update the text in the [Research/Resources](http://collegeaffordability.urban.org/research-and-resources/#) and [Chart Index](http://collegeaffordability.urban.org/chart-index/) sections**

### Editing data
Researchers are responsible for the editing and updating of the data. Finished data lives in the [data_scripts/data/](data_scripts/data/) folder. The researcher and developer may want to make this folder a shared box folder, if the researcher is unable to get push/pull access via github. 

**It is crucial that any csv files are kept in their original column format**. This will prevent errors in the generation of charts from this data for more complicated forms of charts (stacked, grouped, toggle, etc). For understanding toggle chart organization, see [this example file](data_scripts/scripts/Template%20for%20data%20file.xlsx), for other  complicated items, see working csv's to get a sense of the column format. 

### Editing charts

#### Editing chart titles, context, and appearance metadata
All 200+ charts in this website are created and updated using information from two sources: the csv files found in the [data_scripts/data/](data_scripts/data/) and each file's corresponding line in the GraphText excel file housed in [data_scripts/scripts/](data_scripts/scripts/) (note that the name of this file can change). 

Once the data is updated and correctly formatted by the **researcher**, it can be referenced in the GraphText file. The **researcher** is responsible for making sure the following columns are filled out:  

> type, sources, titleIfSubtitleisMoved, title, notes, multiples, toggle, data_source, direct_labels, y_tick_format, subtitle, subtitle_for_multiples, x_label, y_label

A description of what each of these columns calls for is found in the [CodeBook](data_scripts/scripts/Codebook%20for%20graphtext%20update.xlsx) which outlines all column definitions and parameters. The **developer** is responsible for filling out all additional metadata columns, most of which modify the appearance of the chart (ticks, axes styles, padding, etc). The codebook will help you know which columns are required and which are optional. _These modifications can be cumbersome and sometimes must be done iteratively. To learn more about that, please see [this workflow]()._

#### Downloadable screenshots and data
By default, the names of these files are a generalized transformation of the title of the chart. For instance, a chart titled "Type of Employment over the Past Year among People with Only a High School Diploma or GED and Not Currently Attending School" will generate file names of "type_of_employment_over_the_past_year_among_people_with_only_a_high_school_diploma_or_ged_and_not_currently_attending_school.png". Please note that very long titles will get truncated after some number of characters. In this event, use the "imageOverride" flag in the GraphText file to rename the resulting savable files.

The data is uploaded and made downloadable automatically during the update process. There should not be any need for manual edits to these items.

*NOTE: If any issues arise in the creation of the screenshots and data, there is a good chance it has to do with the naming of these files. If this happens, use the imageOverride flag to create a new, unique, and shorter file name *

### Editing tables
In section 8 (Student Profiles), there are several tables. These must be updated by hand in the .jsx file.

### Updating `dist/` folder
When a section of data are updated along with the corresponding GraphText rows (note: not _all_ sections must be done to run this process), you will want to see how these changes appear on the site. The workflow is as follows:

```
						  
data_scripts/data/*.csv        data_scripts/scripts/GraphTextV2.xlsx
				↘	     		  ↙
  run   data_scripts/scripts/process_graphs.R 
						 ↓
		(charts) pages/*/json/*.json	   pages/*/*.jsx (text)
							↘	     		  ↙
								 run gulp						
					       			↓
								  dist/ (production folder)
```

Whenever you've made changes to either the data or the GraphText file, you have to rerun the R script for the chart to be up to date in the `pages/` folder. To have that change compiled in the browser, you must then run the gulp process to compile the `pages/` components, data, etc. into static html pages in the `dist/` folder.

#### Running R scripts alone
_Note: follow the directions [above](#set-up) to get set up with this process._

The R script at [data_scripts/scripts/process_graphs.R](data_scripts/scripts/process_graphs.R) must be run in order to create the json files that contain the combined .csv info and the metadata (title, sources, styles, etc) found in GraphText. _Note that this script references its neighbor, [data_scripts/scripts/makejsons_update.R](data_scripts/scripts/makejsons_update.R), although you should not need to update this file._

When running **process_graphs.R**, whether in the terminal, RStudio, or in the bash file, you must make sure the following items are updated:

- `GRAPHTEXT_FILENAME <- "path_to_your_graphText_file.xlsx"`
- `selectedSection <- 1` where 1 is some section number between 1 (What is College?) and 8 (Student Profiles). 

_**If you don't update these lines of code in the R script it will not update the correct information!!!**_

#### Running gulp

See ["How do I get started"](#how-do-i-get-started) for more information, but basically, just type `gulp` once your data/charts/text are all in `pages/`

#### Running a local server

When gulp has run, you will want to run a local server in the `dist/` folder. I use `http-server` but you may use whatever you want.

#### Running R with gulp together
As in the previous step, ensure that your R script is referencing the correct GraphText.xlsx file and section. If you want to speed up the process outlined above, you can use a bash script that I have included in the home directory. The file, `rebuild.sh` does the following:

1) Stops any local-server running on port 8080 (change to your port if desired) 
2) Runs `scripts/process_graphs.R`
3) Runs `gulp`
4) Runs an `http-server` instance on localhost:8080 from the `dist/` folder

To run this file, go to the root directory and run

```
$ bash rebuild.sh
```

Optionally, you can run only the R file by using running this command in the root directory
```
$ bash runRscript.sh
```

Finally, if you want to stop your local server and re-run the rebuild.sh file, you may do so by pressing `control-z`

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
* Ben Chartoff or Alice Feng for editing charts, overarching code questions, and process questions.
* Jerry Ta for updating/editing text, download images, etc.

Formerly:
* Daniel Wood (was at Urban)
* Peter Cho (pcho@phase2technology.com)
* Ryan Smylski
