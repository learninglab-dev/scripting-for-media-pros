const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const junk = require('junk')


var footagePath = process.argv.slice(2);
var pathObject = path.parse(`${footagePath}`);
var shootName = pathObject.name;
var cameraFolderPath = fs.readdirSync(`${footagePath}`);
var cleanCameraFolder = cameraFolderPath.filter(junk.not);
// cleanCameraFolder.forEach(fs.readdirSync(`${footagePath}/${cleanCameraFolder}`))
var allFiles = cleanCameraFolder.forEach(fs.readdirSync(`${footagePath}`));
// var allFilesFiltered = allFiles.filter(junk.not);
console.log(cleanCameraFolder);

class Clip {
  constructor(clip, shootName, cameraFolder) {
    this.oldName = clip;
    // this.renamed = fs.renameSync(`${footagePath}/${cleanCameraFolder[i]}/${clips}`, `${footagePath}/${cleanCameraFolder[i]}/${shootName}_${cleanCameraFolder[i]}_${("00" + (i + 1)).slice(-3)}${path.extname(clips)}`);
    this.newName = (`${shootName}_${cameraFolder}_${("00" + 1).slice(-3)}${path.extname(clip)}`);
  }
};
// var testClip = new Clip('20191108_001_Marcelo_Portraits_5D4aStills_001', shootName, 'camerafolder')
// console.log(testClip);



// for (var i = 0; i < cleanCameraFolder.length; i++) {
//     var allFiles = fs.readdirSync(`${footagePath}/${cleanCameraFolder[i]}`);
//     var clips = allFiles.filter(junk.not);
//     // console.log(clips);
//         for (var j = 0; j < clips.length; j++) {
//             var eachClip = new Clip(clips[j]);
//             // console.log(eachClip.oldName);
//
//         };
// };


// var firstClip = clips[1]
// var firstClipExt = path.extname(firstClip)
// fs.writeFileSync(`${footagePath}/${shootName}.txt`, "");

// console.log(clips);
// for (var i = 0; i < cleanCameraPath.length; i++) {
//   var cleanClips = fs.readdirSync(`${footagePath}/${cleanCameraPath[i]}`)
//
//
//
// }



// if (`${clips[1]}` == `${shootName}_001${firstClipExt}`) {
//         console.log('you already ran this');
// } else {
//       for (var i = 0; i < clips.length; i++) {
//               var thisClip = new Clip(`${clips[i]}`)
              // fs.appendFileSync(`${footagePath}/${shootName}.txt`, `${thisClip.oldName}  ----->  ${thisClip.newName}\n \n`);
              // console.log(thisClip.oldName);
              // console.log(thisClip.newName);
//       };
// }












      // Writes the original file names into a .txt doc
    // fs.writeFileSync(`${footagePath}/${shootName}.txt`, `${ogFootage}`);
// Read directory and return everything but hidden files, returns a string



    // console.log(ogFootage);

          // Loop through file names
          // for (var i = 0; i < footage.length; i++) {
                // Parse out each filename into parts
            // var extParse = path.parse(`${footage[i]}`);
            //     // Identify and isolate the extension
            // var extName = extParse.ext

                // This is the bit that does the renaming
            // fs.renameSync(`${footagePath}/${footage[i]}`, `${footagePath}/${shootName}_${("00" + (i + 1)).slice(-3)}${extName}`);
            // renamedFootage.push(footage[i])
              // Add new names to the .txt file


          // };

          // fs.appendFileSync(`${footagePath}/${shootName}.txt`, `\n${renamedFootage}`);
          // console.log(renamedFootage);







    // Loop through the given folder and gather all the footage together




// console.log(theData);
