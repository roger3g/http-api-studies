const { readFile, writeFile } = require('fs')
const { join } = require('path')

const file =  'data.json'
const content = JSON.stringify({message: 'Welcome to your json file'}, null, 2)

function createAndWriteFile() {
  writeFile(file, content, {enconding: 'utf-8', flag: 'w'}, error => {
    error ? error : console.log('\nFile updated\n')
  })

  return readFileContent()
}

function readFileContent() {
  readFile(file, 'utf8' , (error, data) => {
    error ? error : console.log(`File content:\n\n${data}`)
  })
}

createAndWriteFile()