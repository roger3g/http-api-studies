const express = require('express')
const server = express()
const router = express.Router()

const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const PORT = 3000

server.use(express.json({extended: true}))
server.use(router)

router.get('/', (req, res) => {
  const content = readFile()
  return res.send(content)
})

router.post('/', (req, res) => {
  const {name, email, phone} = req.body
  const fileContent = readFile()
  const id = Math.random().toString(32).substr(2,9).toUpperCase()
  
  fileContent.push({id, name, email, phone})
  writeFile(fileContent)
  return res.send({id, name, email, phone})
})

router.put('/:id', (req, res) => {
  const {name, email, phone} = req.body
  const {id} = req.params
  
  const fileContent = readFile()
  const selectedUser = fileContent.findIndex(user => user.id === id)
  
  const {
    id: currentId,
    name: currentName,
    email: currentEmail, 
    phone: currentPhone
  } = fileContent[selectedUser]

  const NewUser = {
    id: currentId,
    name: name ? name : currentName,
    email: email ? email : currentEmail,
    phone: phone ? phone : currentPhone
  }

  fileContent[selectedUser] = NewUser
  writeFile(fileContent)

  return res.send(NewUser)
})

router.delete('/:id', (req, res) => {
  const {id} = req.params
  const fileContent = readFile()
  const selectedUser = fileContent.findIndex(user => user.id === id)

  fileContent.splice(selectedUser, 1)
  writeFile(fileContent)

  return res.send('Deleted User')
})

server.listen(PORT, (error) => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on localhost:${PORT}`
  
  return console.log(message)
})

const readFile = () => {
  const content = readFileSync(join(__dirname, './users.json'), 'utf-8')
  return JSON.parse(content)
}

const writeFile = content => {
  const updatedFile = JSON.stringify(content, null, 2)
  return writeFileSync(join(__dirname, './users.json'), updatedFile, 'utf-8')
}