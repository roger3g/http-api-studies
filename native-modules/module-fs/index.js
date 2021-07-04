const { 
  mkdir, open, appendFile, 
  readFile, unlink, rmdir, writeFile 
} = require('fs')

const { join } = require('path')

const file = join(__dirname, `data.json` )
const content = JSON.stringify({ message: "Hello World" }, null, 2)

const createFile = () => {
  open(file, 'w', error => {
    return error ? error : console.log('File created!')
  })
}

const updateFile = () => {
  writeFile( file, content, {enconding: 'utf-8', flag: 'w'}, error => {
    return error ? error : console.log( 'File updated!' )
  })
}

const readContentFile = () =>{
  readFile(file, 'utf8' , (error, data) => {
    return error ? error : console.log(`File content:\n${data}`)
  })
}

createFile()
updateFile()
readContentFile()
