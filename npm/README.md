# NPM

O NPM **(Node Package Manager)** é um poderoso gerenciador de pacotes utilizado para administrar as bibliotecas e frameworks utilizados em uma aplicação node.

## O que é NPM?

O NPM é uma ferramenta do **Node.js** para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando. Sempre que um projeto é criado por meio do gerenciador, é adicionado um arquivo chamado `package.json`, que contém a relação dos pacotes instalados no ambiente. Veja um exemplo, a seguir.

```json
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Assim, quando for preciso realizar alguma alteração, o NPM verifica esse arquivo e faz as atualizações necessárias de forma simples e rápida. Isso contribui para manter a organização do projeto e de suas dependências, além de evitar erros de configurações ao fazer a instalação de pacotes de forma manual.

## Comandos

- Inicie um pacote rapidamente: `npm init -y`

- Instalar pacote: `npm install [pacote]`
- Instalar pacotes: `npm install [pacote1] [pacote2] [pacote3] [pacoteN]`
- Instalar uma versão específica de um pacote: `npm install [pacote]@[versão]`

- Desinstalar pacote: `npm remove [pacote]`
- Desinstalar pacotes: `npm remove [pacote1] [pacote2] [pacote3] [pacoteN]`

- Lista de pacotes instalados: `npm ls --depth 0`
- Lista de pacotes instalados globalmente: `npm ls -g --depth 0`

- Gitingore padrão Nodejs: `npx gitignore node`

- Abrir o site de um projeto: `npm home [projeto]`
- Abrir o repositório de um projeto: `npm repo [projeto]`

- Analisar dependências desatualizadas: `npm outdated`

- Travar a versão das dependências instaladas: `npm shrinkwrap`

- Procurar por pacotes não declarados no package.json: `npm prune && npm fund`

- Abrir um servidor: `npx lite-server`

Comando      | Atalho
-------------|------------------
install      | i
list         | ls
test         | t
--global     | -g
--save       | -S
--save-dev   | -D