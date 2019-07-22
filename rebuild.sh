#!/bin/bash
# stop the reload function
pwd
stop 8080

# run the R script
cd data_scripts
pwd
Rscript scripts/process_graphs.R 

# run the gulp command
cd ..
pwd
gulp

# run the reload function
cd dist
pwd
http-server
