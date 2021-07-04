# Módulo os

Documentação: https://nodejs.org/docs/latest-v12.x/api/os.html

O módulo os fornece métodos e propriedades de utilitário relacionados ao sistema operacional.

## Métodos

Métodos          | Descrição
-----------------|-------------------------------------
type()           | Exibe o tipo de sistema operacional.
version()        | Exibe a versão do kernel.
platform()       | Exibe o sistema operacional.
arch()           | Exibe a arquitetura da CPU.
endianness()     | Exibe a endianness da CPU
hostname()       | Exibe o nome do host
totalmem()       | Exibe a memória total em bytes
freemem()        | Exibe a memória livre em bytes
uptime()         | empo que a máquina está ativa

```js
const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.platform())
console.log(os.arch())
console.log(os.endianness())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.uptime())
```