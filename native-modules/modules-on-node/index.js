const soma = require('./soma.js')
const subtrair = require('./subtrair.js')

const A = 6, B = 4

const resultSoma = soma(A, B)
const resultSubtrair = subtrair(A, B)

console.log(`Soma: (${A} + ${B}) = ${resultSoma}`)
console.log(`Subtração: (${A} - ${B}) = ${resultSubtrair}`)