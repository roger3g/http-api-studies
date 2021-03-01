# Criando seus própios módulos no node

para importar um módulo no node é bem simples:

```js
const soma = require( './soma.js' )
```

Existem algumas formas de exportar módulos:

* Exportar como variável em forma de função:

```js
const soma = (a, b) => {
  return a + b
}

module.exports = soma
```

* Exportar como método ou propiedade de um objeto:

```js
const soma = (a,b) => {
  return a + b
}

module.exports = {
  soma
}
```