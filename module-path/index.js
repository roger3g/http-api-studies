const { parse, join } = require('path')
const file = parse(join(__dirname, '/main.js'))
console.log(file)