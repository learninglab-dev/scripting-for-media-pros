#!/usr/bin/env node

var moment = require('moment');

var theDate = moment().format('YYYYMMDD-HHmmss.SSS');

console.log(`mo-cli.js just got launched baby!!`);
console.log(`the date and time are ${theDate}`);
