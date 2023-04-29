#!/bin/bash
echo Enter project name:
read name

echo === CREATING NEW ANGULAR PROJECT: $name ===
ng new $name
cd $name

echo === INSTALLING BOOTSTRAP ===
npm install --save bootstrap

echo === SETTING UP BOOTSTRAP ===
echo "@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');" >> src/styles.css

echo === DONE ===