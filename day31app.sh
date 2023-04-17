#!/bin/bash

# dont add angular routing
# use CSS
ng new day-31-lecture

# generate components directory and add a component
ng generate component components/my-component
# or short form
ng g c components/my-component
# to exclude additional "my-component" folders from breing created
ng g c components/my-component --skip-tests --flat