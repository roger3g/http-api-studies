# Módulo Path

Com o módulo Path podemos trabalhar caminhos de arquivos e pastas.

Documentation: https://nodejs.org/api/os.html

No node.js existe uma variável chamada `__dirname` que nos retorna o nosso caminho atual a partir da raiz.
**Obs:** o `__dirname` não é exclusivo do módulo Path.

O módulo Path fornece uma maneira de trabalhar com diretórios e caminhos de arquivo.

## basename()

Retorna a última parte de um caminho.

```js
const path = require('path')
path.basename(caminho, extensão)
```
* `caminho` - O caminho do arquivo para pesquisar
* `extensão` - Opcional. Se o nome do arquivo terminar com a sequência especificada, a sequência especificada será excluída do resultado

### Exemplo

Extrair o nome do arquivo de um caminho de arquivo:

```js
const path = require('path')
const filename = path.basename('/Users/Roger/scripts/index.js')
console.log(filename)
```

Extrair o nome do arquivo, mas não o ".js" no final:

```js
const path = require('path')
const filename = path.basename('/Users/Roger/scripts/index.js', '.js')
console.log(filename)
```

## delimiter

Retorna o delimitador especificado para a plataforma.

```js
const path = require('path')
console.log(path.delimiter)
```

* `;` (ponto e vírgula) para Windows
* `:` (dois pontos) para POSIX

## dirname()

Retorna os diretórios de um caminho.

```js
const path = require('path')
const directories = path.dirname(caminhoDoArquiovo)
```

* `caminhoDoArquiovo` - O caminho do arquivo para pesquisar.

### Exemplo

Obtenha os diretórios de um caminho de arquivo:

```js
const path = require('path')
const directories = path.dirname('/Users/Roger/scripts/index.js')
console.log(directories)
```

## extname()

Retorna a extensão do arquivo de um caminho

```js
const path = require('path')
const ext = path.extname(caminhoDoArquiovo)
```

* `caminhoDoArquiovo` - O caminho do arquivo para pesquisar

### Exemplo

Obtenha a extensão de um caminho de arquivo:

```js
const path = require('path')
const ext = path.extname('/Users/Roger/scripts/index.js')
console.log(ext)
```

## format()

Formata um objeto de caminho em uma sequência de caminho

```js
const path = require('path')
const p = path.format(objeto)
```

* `objeto` - O objeto de caminho a ser formatado

### Exemplo

Formate um objeto de caminho em uma sequência e retorne o resultado:

```js
const path = require('path')
const objeto = { 
  dir: '\\Users\\Roger\\scripts', 
  base: 'index.js' 
}
const p = path.format(objeto)
console.log(p)
```

## isAbsolute()

Retorna true se um caminho for absoluto, caso contrário false

```js
const path = require('path')
path.isAbsolute((caminho))
```

* `caminho` - O caminho para verificar

### Exemplo

Verifique se cadeias diferentes são caminhos absolutos:

```js
const path = require('path')
console.log(path.isAbsolute('/Users/Roger/scripts/index.js'))     // true
console.log(path.isAbsolute('scripts/index.js'))                  // false
console.log(path.isAbsolute('\\Users\\Roger\\scripts\\index.js')) // true
```

## join()

Une os caminhos especificados em um

```js
const path = require('path')
const x = path.join(camihnos)
```

* `camihnos` - Série de segmentos de caminho para unir em um caminho

### Exemplo

Junte vários segmentos em um caminho:

```js
const path = require('path')
const x = path.join('Users', 'Roger', 'scripts', 'index.js')
console.log(x)
```

## normalize()

Normaliza o caminho especificado

```js
const path = require('path')
const x = path.normalize(caminho)
```

* `caminho` -  O caminho que você deseja normalizar.

### Exemplo

Resolva o caminho:

```js
const path = require('path')
const x = path.normalize('Users/Roger/../index.js')
console.log(x)
```

## parse()

Formata uma cadeia de caminho em um objeto de caminho

O método parse() é usado para retornar um objeto cujas propriedades representam o caminho especificado. Este método retorna as seguintes propriedades:

Saída  | Descrição
-------| ---------------
root   | nome da raiz
dir    | nome do diretório
base   | nome do arquivo com extensão
ext    | única extensão
name   | apenas nome do arquivo

```js
const path = require('path')
path.parse(caminho)
```

* `caminho` - Contém o caminho do arquivo que seria analisado pelo método.

### Exemplo

Retorna informações sobre o caminho especificado

```js
const path = require('path')
const file = path.parse(path.join(__dirname, 'main.js'))
console.log(file) 
```

## posix

Retorna um objeto que contém propriedades e métodos específicos do POSIX

```js
const path = require('path')
console.log(path.posix)
```

A propriedade `path.posix` fornece acesso a implementações específicas de POSIX dos métodos path.

### Exemplo

```js
const path = require('path')
console.log(path.posix)
```

## relative()

Retorna o caminho relativo de um caminho especificado para outro caminho especificado

```js
const path = require('path')
const file = path.relative(de, para) 
```

O método `path.relative()` é usado para encontrar o caminho relativo de um determinado caminho para outro caminho com base no diretório de trabalho atual. Se os dois caminhos fornecidos forem iguais, ele resolverá para uma string de comprimento zero.

* `de` - É o caminho do arquivo que seria usado como caminho base.
* `para` - É o caminho do arquivo que seria usado para encontrar o caminho relativo.

Valor de retorno: ele retorna uma string com a forma normalizada do caminho.

### Exemplo

```js
const path = require('path')
const file = path.relative('users/admin', 'admin/files/website') 
console.log(file)
```

## resolve()

Resolve os caminhos especificados em um caminho absoluto

```js
const path = require('path')
path.resolve(caminhos) 
```

* `caminhos` - é uma série de caminhos de arquivo que seriam resolvidos juntos para formar um caminho absoluto.

O método resolve() é usado para resolver uma sequência de segmentos de caminho para um caminho absoluto. Funciona processando a sequência de caminhos da direita para a esquerda, acrescentando cada um dos caminhos até que o caminho absoluto seja criado. O caminho resultante é normalizado e as barras finais são removidas conforme necessário.

### Exemplo

```js
const path = require('path')
console.log(path.resolve(__dirname, 'main.js')) 
```

## sep

Retorna o separador de segmentos especificado para a plataforma

### Exemplo

```js
const path = require('path')
console.log(path.sep) 
```

# win32

Retorna um objeto que contém propriedades e métodos específicos do Windows

### Exemplo

```js
const path = require('path')
console.log(path.win32) 
```