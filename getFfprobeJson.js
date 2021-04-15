const fs = require("fs")
const cp = require('child_process');
const chalk = require('chalk');
const airtable = require("airtable")
const filePath = process.argv.slice(2);
require('dotenv').config()

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API
});
const base = airtable.base("appged1NEayZWYBL9");

function getFfprobeJson(filePath, ffprobePath){
  console.log("about to grab json for " + JSON.stringify(filePath));
  const options = [
    '-v', 'quiet',
    '-print_format', 'json',
    // '-select_streams', 'v:0',
    '-show_format',
    '-show_streams',
    filePath];
  const ffProbeOutput = cp.spawnSync(ffprobePath, options, { encoding : 'utf8' });
  const theJson = JSON.parse(ffProbeOutput.stdout);
  const theJsonString = JSON.stringify(theJson, null, 4);
  // console.log(chalk.blue(JSON.stringify(theJson, null, 4)));
// console.log(ffProbeOutput.stdout);
const pathString = String(filePath)
const fileName = pathString.substring(pathString.lastIndexOf('/')+1)

base("JSONTest").create({
      Name: fileName,
      JSON: theJsonString,


}, function(
  err,
  record
) {
  if (err) {
      console.error(err);
      return;
}
  console.log(record.getId());
});

  return theJson;



  const theData = JSON.parse(stdout)
  fs.writeFileSync('./output/localJSON', JSON.stringify(theData, null, 4),
    { encoding: "utf8" } )

  console.log(stderr);
  if (error !== null) {
      console.log(`exec error: ${error}`);
}


}
;



getFfprobeJson(process.argv.slice(2),'ffprobe');
module.exports.getFfprobeJson = getFfprobeJson;
