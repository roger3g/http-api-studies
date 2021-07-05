# Módulo fs (File System)

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

* [X] `readFile()`: Este método é usado para ler arquivos no seu computador.

```js
const fs = require('fs')

fs.readFile(caminho_do_arquivo, 'utf8', (error, data) => {
  return error ? error : console.log(data) // 'data' é o conteúdo do arquivo
} )
```

## Criar arquivos

* [X] `appendFile()`: Este método anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, ele será criado:

```js
const fs = require( 'fs' )

fs.appendFile( caminho_do_arquivo , nome_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

## Atualizar arquivos

* [X] `writeFile()`: este método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado:

```js
const fs = require('fs')

fs.writeFile(caminho_do_arquivo, conteudo_do_arquivo, {enconding:'utf-8', flag:'flag'} , error => {
  return error ? error : console.log('Done')
} )
```

## Deletar arquivos

* [X] `unlink()`: Este método é usado para deletar arquivos no seu computador.

```js
const fs = require('fs')

fs.unlink(caminho_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

## Renomear arquivos

* [X] `rename()`: Este método é usado para renomear arquivos no seu computador.

```js
const fs = require('fs')

fs.rename(caminho_do_arquivo, novo_nome_do_arquivo, error => {
  return error ? error : console.log('Done')
} )
```

## Criar pastas

* [X] `rename()`: Este método é usado para criar uma pasta no seu computador.

```js
const fs = require('fs')

fs.mkdir(camihno_e_nome_da_pasta, error => {
  return error ? error : console.log('Done')
} )
```

## Deletar pastas

* [X] `unlink()`: Este método é usado para deletar pastas no seu computador.

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