const fs = require('fs');
const path = require('path');

var footagePath = process.argv.slice(2);
var footage = fs.readdirSync(`${footagePath}`);
var pathObject = path.parse(`${footagePath}`);
var folderName = pathObject.name

for (var i = 0; i < footage.length; i++) {
  fs.renameSync(`${footagePath}/${footage[i]}`, `${footagePath}/${folderName}_${("00" + i).slice(-3)}`)
};
