# Next steps

## branching and merging

How will we manage branching and merging?

One proposal:

1. we each create a single named branch for ourselves (`mk`, `cc`, `mo`) and work in that ALL the time.
2. then we periodically merge that branch with the master locally and push directly back up to the master, i.e.
```
git checkout -b mk
# write my scripts
git add .
git commit -m "did my changes"
git push origin mk #just to be safe
git checkout master
git pull #just to make sure I'm working with the updated master
git merge mk
git add .
git commit -m "merging mk branch"
git push origin master
```

Another proposal

1. we each create a single named branch for ourselves (`mk`, `cc`, `mo`) and work in that ALL the time.
2. we routinely push that branch up to Github.
3. we pull from the master periodically to get any useful changes
4. we periodically submit pull requests using the Github web interface
```
git checkout -b mk
# do all my scripting
git add .
git commit -m "did my changes"
git push origin mk
#and when I want changes
git pull origin master
```

## documentation

let's start putting the markdown for this project inside the project.  We can for sure port this over to the resources periodically, but it will probably be way way easier to have both the code and the documentation in one spot.

let's put the markdown versions of the tutorial videos in `/documentation/how-to` for now?

## folder structure

just to make sure we don't collide with each other too too much, let's all

1. share `/documentation` because we want to make a single pool of docs ultimately, but we can each have a subfolder there.
2. each create a folder with our initials at the root of the project, i.e. `/cc`, `/mk`, `/mo`--and store all our code there
3. at the root level have a cli each, following mike's initial pattern.

## ideas for things to make

there are so so many things--here are just a few ideas:

### the pieces of an ingest workflow

lots of this is in the current renaming scripts, and we can pull from them if it seems useful, but it's always cool to rebuild from scratch, if only because this exercise makes it easy to maintain the production scripts.

1. gathering media file information with ffprobe
2. constructing new file names and renaming
3. storing renaming information and file information in airtable
4. sending notifications to Slack
5. sending media to Slack
6. grabbing random stills?
7. auto-processing?
8. adding to any other 3rd party platforms/destinations?
9. handling extra Zoom elements?
10. handling differences between timecode, camera time and universal time?
11. polling other data sources for relevant, archivable material? (slack channels, zoom transcripts, etc.)

### basic post-production workflow tools

this is stuff that either already exists in `the-tools` or is pretty basic everyday stuff that we have to do all the time, or stuff that is sortof a prerequisite to doing anything more complicated.

1. trimming clips in ffmpeg
2. creating gifs
3. editing in ffmpeg from ins and outs
4. reading `.fcpxml`
5. writing `.fcpxml`
6. uploading to YouTube, Vimeo, Dropbox, Google Drive from the command line
7. processing images with imagemagick and other tools
8. creating project templates from airtable
9. better automated hero-shot workflows


### optional server-based stuff?

do we want to do anything involving a server or AWS Lambda functions? like listen for messages from our Slack? start up interactive conversations in Slack for some of the next steps in the process?  This may be a 2021 project!

### random mk unfinished projects

1. editing with Google Slides
2. creating segments from timestamps and live-logging or live-logging-ish operations
3. `.fcpxml` to Airtable to port FCPX databases over to Airtable.
4. peakGifs across time
5. liveStills
6. Python scripting for
  7. Fusion
  8. Blender
  9. Cinema 4D
10. AE scripts
11. pretty-print shoot report
12.
