const express = require('express')
const server = express()

const Database = require('./database/db.js')
const createUser = require('./database/createUser.js')

const port = 3000

server.use(express.json({extended: true}))

server.get('/users', (req, res) => { // Acessar todos os usuários

  try {

    Database.then(async db => {
      const users = await db.all('SELECT * FROM users')
      console.log(users)
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Accessing users')
})

server.get('/users/:id', (req, res) => { // Acessar usuário por id

  try {

    Database.then(async db => {
      const user = await db.all(`SELECT * FROM users WHERE id = "${req.params.id}"`)
      console.log(user)
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Accessing specified user')
})

server.post('/users', (req, res) => { // Criar um usuário

  try {

    Database.then(async db => {
      await createUser(db, {
        name: String(req.body.name),
        age: String(req.body.age)
      })
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Creating user')
})

server.put('/users/:id/', (req, res) => { // Editar um usuário

  try {

    Database.then(async db => {
      await db.all(`UPDATE users SET age = '${req.body.age}' WHERE id = "${req.params.id}"`)
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Updating user')
})

server.delete('/users', (req, res) => { // Deletar todos os usuário

  try {

    Database.then(async db => {
      await db.run('DELETE FROM users')
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Deleting all user')
})

server.delete('/users/:id', (req, res) => { // Deletar usuário por id

  try {

    Database.then(async db => {
      await db.run(`DELETE FROM users WHERE id = "${req.params.id}"`)
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.send('Deleting user')
})

server.listen(port, error => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on http://localhost:${port}/users`
  
  return console.log(message)
})