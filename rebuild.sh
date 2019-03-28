#!/bin/bash
# stop the reload function
pwd
stop 8080

# run the R script
cd /Users/dwood/Box\ Sync/sites/ed-data
pwd
Rscript updated_script/process_graphs.R 

# run the gulp command
cd /Users/dwood/Box\ Sync/sites/college-affordability.urban.org
pwd
gulp

# run the reload function
cd /Users/dwood/Box\ Sync/sites/college-affordability.urban.org/dist
pwd
reload
