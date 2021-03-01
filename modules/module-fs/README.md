# Módulo fs

Documentação: https://nodejs.org/docs/latest-v12.x/api/fs.html

O módulo do sistema de arquivos (fs) do Nodejs permite trabalhar com o sistema de arquivos no seu computador.

Uso comum para o módulo Sistema de Arquivos:

* Ler arquivos
* Criar arquivos
* Atualizar arquivos
* Deletar arquivos
* Renomear arquivos
* Criar pastas
* Deletar pastas

## Ler arquivos

- [X] **`readFile()`** - O método `readFile()` é usado para ler arquivos no seu computador.

```js
const fs = require('fs')
fs.readFile(caminho_do_arquivo, 'utf8', (error, data) => {
  return error ? error : console.log(data) // 'data' é o conteúdo do arquivo
} )
```

## Criar arquivos

O módulo Sistema de Arquivos possui métodos para criar novos arquivos:

1. appendFile()
2. open()

- [X] **`appendFile()`** - O método appendFile() anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, ele será criado:

```js
const fs = require( 'fs' )
fs.appendFile( caminho_do_arquivo , nome_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

- [X] **`open()`** - O método open() usa um "flag" como segundo argumento, se a flag for "w" para "gravação", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado:

```js
const fs = require('fs')
fs.open( caminho_do_arquivo, 'flag', error => {
  return error ? error : console.log('Done')
} )
```

## Atualizar arquivos

O módulo Sistema de Arquivos possui métodos para atualizar arquivos:

1. appendFile()
2. writeFile()

- [X] **`appendFile()`** - O método appendFile() anexa o conteúdo especificado no final do arquivo especificado:

```js
const fs = require('fs')
fs.appendFile(caminho_do_arquivo, conteudo_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

- [X] **`writeFile()`** - O método writeFile() substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado:

```js
const fs = require('fs')
fs.writeFile(caminho_do_arquivo, conteudo_do_arquivo, {enconding:'utf-8', flag:'flag'} , error => {
  return error ? error : console.log('Done')
} )
```

## Deletar arquivos

Para excluir um arquivo com o módulo Sistema de Arquivos, use o método unlink():

```js
const fs = require('fs')
fs.unlink(caminho_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

## Renomear arquivos

Para renomear um arquivo com o módulo Sistema de Arquivos, use o método fs.rename():

```js
const fs = require('fs')
fs.rename(caminho_do_arquivo, novo_nome_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

## Criar pastas

Para criar uma pasta com o módulo Sistema de Arquivos, use o método mkdir() 

```js
const fs = require('fs')
fs.mkdir(camihno_e_nome_da_pasta, error => {
  return error ? error : console.log('Done')
} )
```

## Deletar pastas

Para deletar uma pasta com o módulo Sistema de Arquivos, use o método fs.rmdir():

```js
const fs = require('fs')
fs.mkdir(camihno_e_nome_da_pasta, { recursive: true }, error => {
  return error ? error : console.log('Done')
} )
```

## Flags

Flags para operações de leitura / gravação são:

FLAG  | DESCRIÇÃO
------|---------
r     | Abre o arquivo para leitura. Uma exceção ocorre se o arquivo não existe.
r+    | Abre o arquivo para leitura e escrita. Uma exceção ocorre se o arquivo não existe.
rs    | Arquivo aberto para leitura no modo síncrono.
rs+   | Arquivo aberto para leitura e escrita, contando a OS para abri-lo de forma síncrona.
w     | Abre o arquivo para escrita. O arquivo é criado (se não existir) ou truncado (se existir).
wx    | Como ‘w’, mas não consegue se existe caminho.
w+    | Abre o arquivo para leitura e escrita. O arquivo é criado (se não existir) ou truncado (se existir).
wx+   | Como ‘w+’, mas não consegue se existe caminho.
a     | Abre o arquivo para acrescentar. O arquivo é criado se ele não existe.
ax    | Como ‘a’, mas não consegue se existe caminho.
a+    | Abre o arquivo para leitura e acrescentando. O arquivo é criado se ele não existe.
ax+   | Como ‘a+’, mas não consegue se existe caminho.