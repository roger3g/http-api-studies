# O que é o Nodejs?

Node.js é um runtime de JavaScript baseado no motor de JavaScript V8 do Chrome. O Node.js usa um modelo de non-blocking I/O e orientado por eventos que o torna leve e eficiente. O ecossistema de pacotes do Node.js, npm, é o maior ecossistema de bibliotecas de código aberto do mundo - nodejs.org

Node.JS = Runtime + JS Library

<p align="center">
  <img src="docs/image-1.jpg">
</p>

## Quando usar o Nodejs?

* Streaming de vídeo e áudio
* Apps em tempo real
* Chats ao vivo
* Jogos
* Ferramentas de colaboração
* Software de bolsa de valores

## V8 Javascript Engine

V8 é o mecanismo JavaScript e WebAssembly de código aberto de alto desempenho do Google, escrito em C ++. É usado no Chrome e no Node.js, entre outros.

<p align="center">
  <img src="docs/image-2.png" width="300px">
</p>

## Event Driven

O Node.js usa um único modelo de thread com loop de eventos, por isso impõe um estilo de programação assíncrona.

<p align="center">
  <img src="docs/image-3.png">
</p>

## Blocking vs Non-Blocking

<p align="center">
  <img src="docs/image-4.png">
</p>

Ruim 🚫

```js
// Blocking
const fs = require('fs')

const data = fs.readFileSync('/file.md') // blocks here
console.log(data)

moreWork() // será executado após console.log
```

Excelente ✅

```js
// Non-blocking
const fs = require('fs')

fs.readFile('/file.md', (err, data) => {
  if (err) throw err
  console.log(data)
})

moreWork() // será executado antes do console.log
```

## Event Loop

O Event Loop é o que permite que o Node.js execute operações de I/O sem bloqueio. Apesar do fato de que o JavaScript é de single-threaded, descarregando as operações para o kernel do sistema sempre que possível.

Fases do Event Loop:

<p align="center">
  <img src="docs/image-5.png">
</p>

* Timers
  * Tudo o que foi programado por meio de setTimeout() ou setInterval() será processado aqui.

* IO Callbacks
  * Aqui, a maioria dos retornos de chamada será processada. Como todo código de userland em Node.js é basicamente em callbacks (por exemplo, um callback para uma solicitação HTTP recebida aciona uma cascata de callbacks), este é o código de userland.

* IO Polling
  * Pesquisa para novos eventos a serem processados na próxima execução.

* Set Immediate
  * Executa todos os callbacks registrados via setImmediate().

* Close
  * Aqui, todos os retornos de chamada de evento on(‘close’) são processados.

O cliclo do Event Loop:

<p align="center">
  <img src="docs/image-6.png">
</p>

Quando existe o Event Loop?

<p align="center">
  <img src="docs/image-7.png">
</p>

## HTTP

* [Introdução](docs/1-Introdução.pdf)
* [Conceitos](docs/2-Conceitos.pdf)
* [URI](docs/3-URI.pdf)
* [Messages](docs/4-Messages.pdf)
* [Methods](docs/5-Methods.pdf)
* [Headers](docs/6-Headers.pdf)
* [Status-Code](docs/7-Status-Code.pdf)