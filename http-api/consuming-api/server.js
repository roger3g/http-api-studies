const express = require('express')
const server = express()

const cors = require('cors')
const axios = require('axios')

server.use(cors())

server.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

server.listen(8080)