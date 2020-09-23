const fs = require('fs');
const path = require('path')
const ffmpeg = require('fluent-ffmpeg');

var footagePath = process.argv.slice(2);
// var footage = fs.readdirSync(`${footagePath}`);

ffmpeg.ffprobe(`${footagePath}`, function(err, metadata) {

    var theData = JSON.parse(JSON.stringify(metadata.streams));
            // console.log(theData[1].duration);
            // console.log(theData[1].bit_rate);
            // console.log(theData[1].tags.creation_time);
console.log(theData);

});
