const express = require('express')
const server = express()

const Database = require( './database/db.js' )
const createUsers = require( './database/createUsers.js' )

server.get('/create/:name/:age', (req, res) => {

  Database.then(async db => {
    await createUsers(db, {
      name: String(req.params.name),
      age: String(req.params.age)
    })
  })

  return res.json({message: 'Create'})
})

server.get('/read', (req, res) => {

  Database.then(async db => {
    const users = await db.all('SELECT * FROM users')
    console.log(users)
  })

  return res.json({message: 'Read all'})
})

server.get('/read/:id', (req, res) => {

  Database.then(async db => {
    const user = await db.all(`SELECT * FROM users WHERE id = "${req.params.id}"`)
    console.log(user)
  })

  return res.json({message: 'Read'})
})

server.get('/update/:id/:age', (req, res) => {

  Database.then(async db => {
    await db.all(`UPDATE users SET age = '${req.params.age}' WHERE id = "${req.params.id}"`)
  })

  return res.json({message: 'Update'})
})

server.get('/delete/:id', (req, res) => {

  Database.then(async db => {
    await db.run( `DELETE FROM users WHERE id = "${req.params.id}"` )
  })

  return res.json({message: 'Delete'})
})

server.get('/close', (req, res) => {

  Database.then(async db => {
    await db.close()
    console.log('Closing the database connection.')
  })

  return res.json({message: 'Database connection successfully closed'})
})

server.listen(3000)