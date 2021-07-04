# Módulo url

- [X] **`parse()`** - Analise um endereço com o método `url.parse()` e ele retornará um objeto de URL com cada parte do endereço como propriedades, você terá outras propiedades como `host`, `pathname`, `search`, `query`, `month`.

Veja o exemplo abaixo:

```js
const url = require('url')

const link = 'http://localhost:8080/default.htm?year=2017&month=february'
const myLink = url.parse(link, true)

console.log(myLink.host) // Retorna 'localhost:8080'
console.log(myLink.pathname) // Retorna '/default.htm'
console.log(myLink.search) // Retorna '?year=2017&month=february'

const myLinkData = myLink.query // Retorna an object: { year: 2017, month: 'february' }
console.log(myLinkData.month) // Retorna 'february'
```