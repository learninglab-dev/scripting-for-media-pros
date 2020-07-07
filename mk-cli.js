#!/usr/bin/env node

var moment = require('moment');
var theSlidesJson = require('./data/slides.json');
var theDate = moment().format('YYYYMMDD-HHmmss.SSS');
var fs = require('fs');

console.log(`launching scripting for media pros (mk branch) at ${theDate}`);

var myCsv = "videoTitle,url,id,start,stop"

console.log(`Going to log out the objectId's of all the slides, of which there are ${theSlidesJson.slides.length}`);
for (var i = 0; i < theSlidesJson.slides.length; i++) {
  console.log(`working on slide ${i+1}, which has ${theSlidesJson.slides[i].pageElements.length} pageElements.` );
  for (var j = 0; j < theSlidesJson.slides[i].pageElements.length; j++) {
    if (theSlidesJson.slides[i].pageElements[j].video) {
      myCsv+=`\n${
        theSlidesJson.slides[i].pageElements[j].title
      },${
        theSlidesJson.slides[i].pageElements[j].video.url
      },${
        theSlidesJson.slides[i].pageElements[j].video.id
      },${
        theSlidesJson.slides[i].pageElements[j].video.videoProperties.start ?
        theSlidesJson.slides[i].pageElements[j].video.videoProperties.start :
        0
      },${
        theSlidesJson.slides[i].pageElements[j].video.videoProperties.end ?
        theSlidesJson.slides[i].pageElements[j].video.videoProperties.end :
        "END"
      }`

      // console.log(theSlidesJson.slides[i].pageElements[j].video);
    }
  }
}

console.log(myCsv);

fs.writeFileSync(`/Users/mk/Development/scripting-for-media-pros/data/output.csv`, myCsv, {encoding: "utf8"});
console.log('done');
