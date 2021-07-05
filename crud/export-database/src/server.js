const express = require('express')
const server = express()

const Database = require('./database/db.js')
const createUser = require('./database/createUser.js')

const { join } = require('path')
const nunjucks = require('nunjucks')

const port = 3000

nunjucks.configure(join(__dirname, '/../public/pages'), { 
  express: server,
  noCache: true
})

server.use(express.urlencoded({extended: true}))
server.use(express.static(join( __dirname, '/../public/')))

server.get('/', (req, res) => {
  return res.render('index.html')
})

server.post('/', (req, res) => {

  try {

    Database.then(async db => {
      await createUser(db, {
        name: String(req.body.name)
      })
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.redirect('/users')
})

server.get('/users', (req, res) => {

  try {

    Database.then(async db => {
      const users = await db.all('SELECT * FROM users')
      return res.render('users.html', { users })
    })
    
  } catch (error) {
    console.log(error)
  }
})

server.listen(port, error => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on http://localhost:${port}`
  
  return console.log(message)
})