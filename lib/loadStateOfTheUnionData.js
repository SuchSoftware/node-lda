// Loads the state of the union data.  It would be nice to have a more generic
// loader, but deadlines...

import highland from 'highland'
import fs from 'fs'
import path from 'path'

// In the interests of getting this done sooner, we will assume a file path
// for the files
const datasetPath = path.join(__dirname, '..', 'datasets', 'state_of_the_union')

// Hands back a stream of state of the union documents
// Outer - documents
// Inner - the words in the documents
//
// Issues:
// Ideally we'd sort the files by their filename, but no attention is paid to that
// here.
function load() {
  // Read the file names in the directory

  return loadFiles()
           .flatten()
           .map(loadSingleFile)
           .merge()
           .map(splitOnNewline)
           .map(removeBlankLines)
           .map(removeMetadataLines)
           .map(arrayToString)
}

function loadFiles() {
  return highland((push, next) => {
    fs.readdir(datasetPath, (err, filenames) => {
      push(err, filenames)
      push(null, highland.nil)
    })
  })
}

function loadSingleFile(filePath) {
  return highland((push, next) => {
    fs.readFile(path.join(datasetPath, filePath), (err, data) => {
      push(err, data.toString())
      push(null, highland.nil)
    })
  })
}

function splitOnNewline(content) {
  return content.split('\n')
}

function removeBlankLines(lines) {
  return lines.filter(line => line !== '')
}

function removeMetadataLines(lines) {
  return lines.slice(7)  
}

function arrayToString(documentArray) {
  return documentArray.join(' ')
}

export default load
