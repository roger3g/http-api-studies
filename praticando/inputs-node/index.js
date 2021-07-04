const readline = require('readline-sync')

const { question } = readline
const data = {}

data.name = question('Type your name: ')
data.age = question('Type your age: ')

console.log(data)
