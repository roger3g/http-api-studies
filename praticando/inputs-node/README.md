# Módulo readline-Sync

Documentação: https://www.npmjs.com/package/readline-sync

## Inputs node com módulo não nativo

para fazer inputs com o node você pode instalar um módulo chamado `readline-sync`.

* Instalação: `npm install --save readline-sync`

```js
const readlineSync = require('readline-sync')

const name = readlineSync.question('Type your name: ')

console.log(name)
```

## Inputs node com módulo nativo

```js
const readline = require('readline')

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

leitor.question('Seu nome: ', answer => {
  const nome = answer
  console.log(`Bem vindo ${nome}`)
  leitor.close()
} )
```