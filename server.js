const express = require('express')
const server = express()
const router = express.Router()

const fs = require('fs')
const {readFileSync, writeFileSync} = fs

const PORT = 80

server.use(express.json({extended: true}))
server.use(router)

const readFile = () => {
  const content = readFileSync('./data/users.json', 'utf-8')
  return JSON.parse(content)
}

const writeFile = content => {
  const updatedFile = JSON.stringify(content, null, 2)
  return writeFileSync('./data/users.json', updatedFile, 'utf-8')
}

router.get('/users', (request, response) => {
  const content = readFile()
  response.send(content)
})

router.post('/', (request, response) => {
  const {name, email, phone} = request.body
  const currentContent = readFile()
  const id = Math.random().toString(32).substr(2,9).toUpperCase()
  console.log(id)
  
  currentContent.push({id, name, email, phone})
  writeFile(currentContent)
  response.send({id, name, email, phone})
})

router.put('/users:id', (request, response) => {
  const {id} = request.params
  const {name, email, phone} = request.body
  
  const currentContent = readFile()
  const selectedUser = currentContent.findIndex(user => user.id === id)
  
  const {
    id: currentId,
    name: currentName,
    email:currentEmail, 
    phone: currentPhone
  } = currentContent[selectedUser]

  const NewUser = {
    id: currentId,
    name: name ? name : currentName,
    email: email ? email : currentEmail,
    phone: phone ? phone : currentPhone
  }

  currentContent[selectedUser] = NewUser
  writeFile(currentContent)

  response.send(NewUser)
})

router.delete('/users:id', (request, response) => {
  const {id} = request.params
  const currentContent = readFile()
  const selectedUser = currentContent.findIndex(user => user.id === id)

  currentContent.splice(selectedUser, 1)
  writeFile(currentContent)

  response.send('Deleted User')
})

server.listen(PORT, (error) => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on localhost:${PORT}`
  
  console.log(message)
})