const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')
const junk = require('junk')

class ShootFolder {
  constructor(folderPath) {
    this.path = folderPath
    this.name = path.parse(`${folderPath}`).name
    this.allFiles = fs.readdirSync(`${folderPath}`)
    this.clips = this.allFiles.filter(junk.not)
    this.createNotes = fs.writeFileSync(`${folderPath}/${this.name}.txt`, "")
    this.addNotes = message => fs.appendFileSync(`${folderPath}/${this.name}.txt`, message)
    this.firstClip = this.clips[1]
    this.firstClipExt = path.extname(this.firstClip)
  }
}
class Clip {
  constructor(clip, folderName, folderPath, index) {
    this.oldName = clip
    this.newName = (`${folderName}_${("00" + (i + 1)).slice(-3)}${path.extname(clip)}`)
    this.rename = () => fs.renameSync(`${folderPath}/${clip}`, `${folderPath}/${folderName}_${("00" + (index + 1)).slice(-3)}${path.extname(clip)}`)
  };

function rename(path) {
  const footageToRename = new ShootFolder(path)
  footageToRename.createNotes{}
  if (footageToRename.firstClip == `${footageToRename.name}_001${footageToRename.firstClipExt}`) {
    console.log('you already ran this')
    return
  }
  footageToRename.clips.forEach((clip, i) => {
    const thisClip = new Clip(clip, footageToRename.name, footageToRename.path, i)
    thisClip.rename()
    footageToRename.addNotes(`${thisClip.oldName}  ----->  ${thisClip.newName}\n \n`)
  })
}

rename(process.argv.slice(2))
