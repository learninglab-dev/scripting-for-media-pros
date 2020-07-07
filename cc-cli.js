#!/usr/bin/env node

var fs = require('fs')
var theSlidesJSON = require('./cc/data/slides.json')
var myCsv = "videoTitle,url,id,start,stop"

console.log(`Going to log out all of the objectIDs of all of the slides, of which there are ${theSlidesJSON.slides.length}`);
for (var i = 0; i < theSlidesJSON.slides.length; i++) {
  console.log(`working on slide ${i+1} which has ${theSlidesJSON.slides[i].pageElements.length} pageElements`);
  for (var j = 0; j < theSlidesJSON.slides[i].pageElements.length; j++) {
    if (theSlidesJSON.slides[i].pageElements[j].video) {
        myCsv+=`\n${
          theSlidesJSON.slides[i].pageElements[j].title
        },${
          theSlidesJSON.slides[i].pageElements[j].video.url
        },${
          theSlidesJSON.slides[i].pageElements[j].video.id
        },${
          theSlidesJSON.slides[i].pageElements[j].video.videoProperties.start ?
          theSlidesJSON.slides[i].pageElements[j].video.videoProperties.start :
          0
        },${
          theSlidesJSON.slides[i].pageElements[j].video.videoProperties.end ?
          theSlidesJSON.slides[i].pageElements[j].video.videoProperties.end :
          "END"
        }`
        // console.log(`element ${j} is a video`);
        // console.log(`the title is ${theSlidesJSON.slides[i].pageElements[j].title}`);
        // console.log(`the url is ${theSlidesJSON.slides[i].pageElements[j].video.url}`);
        // console.log(`the start is ${
        //   theSlidesJSON.slides[i].pageElements[j].video.videoProperties.start ?
        //   theSlidesJSON.slides[i].pageElements[j].video.videoProperties.start :
        //   0
        //   }`);
        // console.log(`the end is ${
        //   theSlidesJSON.slides[i].pageElements[j].video.videoProperties.end ?
        //   theSlidesJSON.slides[i].pageElements[j].video.videoProperties.end :
        //   "the whole thing"
        // }`);
    }
  }
}

console.log(myCsv);
fs.writeFileSync(`/Users/casey/Development/scripting-for-media-pros/cc/data/output.csv`, myCsv, {encoding: "utf8"});
console.log(`done`);
