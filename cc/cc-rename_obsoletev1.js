const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

var footagePath = process.argv.slice(2);
var footage = fs.readdirSync(`${footagePath}`);
var pathObject = path.parse(`${footagePath}`);
var folderName = pathObject.name
var extName = pathObject.ext


for (var i = 0; i < footage.length; i++) {

    fs.renameSync(`${footagePath}/${footage[i]}`, `${footagePath}/${folderName}_${("00" + (i + 1)).slice(-3)}.mov`)
    var eachFile = footage[i];

      // Loops through and renames everything, including hidden files

};
