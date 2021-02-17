const express = require('express')
const server = express()

const cors = require('cors')
const axios = require('axios')

server.use(cors())

server.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/comments')
    return res.json(data)
  } catch (error) {
    throw new Error(error)
  }
})

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080')
})