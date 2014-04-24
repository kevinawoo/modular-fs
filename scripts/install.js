#!/usr/bin/env node
'use strict';

process.title = 'npm_postinstall';


var spawn = require('child_process').spawn,
  commands = [
    // add arguments to node below
    ['node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager','update'],
    ['node_modules/bower/bin/bower', 'install']
  ];


// executes all installions in parallel
commands.forEach(function (command) {
  spawn('node', command, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
});
