const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  const users = [
    {name: 'Roger', username: 'abantes'},
    {name: 'Luiz', username: 'zuiz'},
    {name: 'Julia', username: 'juju'},
    {name: 'Diego', username: 'diego3g'},
    {name: 'Renato', username: 'maia'},
    {name: 'Mayk', username: 'maykão'},
  ]

  return res.render('pages/index', {users})
})

server.get('/about', (req, res) => {
  return res.render('pages/about')
})

server.listen(3333, () => {
  console.log('Server running on http://localhost:3333')
})