const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const junk = require('junk')


var footagePath = process.argv.slice(2);
var pathObject = path.parse(`${footagePath}`);
var folderName = pathObject.name;
  var renamedFootage = [];

// Read directory and return everything but hidden files, returns a string
fs.readdir(`${footagePath}`, function (err, files) {
      // Filters out hidden files
    var footage = files.filter(junk.not);
      // Lists out the original file names
    var ogFootage = JSON.stringify(footage, 0, 4);


      // Writes the original file names into a .txt doc
    fs.writeFileSync(`${footagePath}/${folderName}.txt`, `${ogFootage}`);
    console.log(ogFootage);

          // Loop through file names
          for (var i = 0; i < footage.length; i++) {
                // Parse out each filename into parts
            var extParse = path.parse(`${footage[i]}`);
                // Identify and isolate the extension
            var extName = extParse.ext

                // This is the bit that does the renaming
            fs.renameSync(`${footagePath}/${footage[i]}`, `${footagePath}/${folderName}_${("00" + (i + 1)).slice(-3)}${extName}`);
            renamedFootage.push(footage[i])
              // Add new names to the .txt file


          };

          fs.appendFileSync(`${footagePath}/${folderName}.txt`, `\n${renamedFootage}`);
          console.log(renamedFootage);
});






    // Loop through the given folder and gather all the footage together




// console.log(theData);
