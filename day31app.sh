#!/bin/bash

# use CSS
ng new day-31-lecture
# generate components directory and add a component
ng generate component components/my-component
# or short form
ng g c components/my-component
# to exclude additional "my-component" folders from breing created
# skip test will not create the test file
ng g c components/my-component --skip-tests --flat

# install bootstrap
npm install --save bootstrap

# after installing bootstrap go to src/styles.css and add import 
# '@import url(../node_modules/bootstrap/dist/css/bootstrap.css)'
# ORR
# add "node_modules/bootstrap/dist/css/bootstrap.css" to styles array in angular.json