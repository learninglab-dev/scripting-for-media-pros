const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const junk = require('junk')

// Get path from Terminal command
var footagePath = process.argv.slice(2);
// Breaks path out into parts
var pathObject = path.parse(`${footagePath}`);
// Collects the name of the folder
var folderName = pathObject.name;
// Returns all files within the folder
var allFiles = fs.readdirSync(`${footagePath}`);
// Returns all non-hidden files within the folder
var clips = allFiles.filter(junk.not);
// Writes an empty .txt file to fill later
fs.writeFileSync(`${footagePath}/${folderName}.txt`, "");
// Isolates the second clip in the folder to later check for rename
var firstClip = clips[0]
// Isolates the extension of the second clip in the folder, again to check for rename
var firstClipExt = path.extname(firstClip)

// Defines each clip as a class, allows processing to happen on a clip by clip basis
    class Clip {
      constructor(clips) {
          // Returns original names of all files
        this.oldName = clips;
          // Renames all files
        this.renamed = fs.renameSync(`${footagePath}/${clips}`, `${footagePath}/${folderName}_${("00" + (i + 1)).slice(-3)}${path.extname(clips)}`);
          // Returns the new name for all files
        this.newName = (`${folderName}_${("00" + (i + 1)).slice(-3)}${path.extname(clips)}`);
      }
    }


// Checks if the second file in the folder is the same as what you're trying to rename it
if (`${clips[1]}` == `${folderName}_001${firstClipExt}`) {
      console.log('you already ran this');
} else {
      // Loops through all clips, defining them as the class:Clip
      for (var i = 0; i < clips.length; i++) {
              var thisClip = new Clip(`${clips[i]}`)
                // Logs all changes made into the .txt file created earlier
              fs.appendFileSync(`${footagePath}/${folderName}.txt`, `${thisClip.oldName}  ----->  ${thisClip.newName}\n \n`);
      };

}
