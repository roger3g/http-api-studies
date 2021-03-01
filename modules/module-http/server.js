const http = require( 'http' )
const fs = require( 'fs' )
const path = require( 'path' )

http.createServer( ( req , res ) => {

  const file = req.url === '/' ? 'index.html' : req.url
  const filePath = path.join( __dirname, 'public', file )
  const extname = path.extname( filePath )

  const allowedFileTypes = [ '.html', '.css', '.js' ]
  const alloewd = allowedFileTypes.find( ( item ) => { item == } )
  
  fs.readFile( 
    filePath,
    ( err , content ) => {
      if ( err ) { throw err }
        res.end( content )
    }
  )
  
} ).listen( 5000 , () => console.log( 'Server running' ) )
/*

O módulo HTTP interno
O Node.js possui um módulo interno chamado HTTP, que permite ao Node.js 
transferir dados pelo HTTP (Hyper Text Transfer Protocol).

const http = require( 'http' )


Node.js como um servidor Web
O módulo HTTP pode criar um servidor HTTP que escute as portas do servidor 
e dê uma resposta de volta ao cliente.

Use o método createServer() para criar um servidor HTTP:

const http = require( 'http' )

// crie um objeto de servidor:
http.createServer( ( req , res ) => {
  res.write('Hello World!') // escreva uma resposta para o cliente
  res.end() // finalize a resposta
} ).listen( 8080 ) // o objeto do servidor escuta na porta 8080



Adicionar um cabeçalho HTTP
Se a resposta do servidor HTTP deve ser exibida como HTML, você deve incluir 
um cabeçalho HTTP com o tipo de conteúdo correto:

const http = require( 'http' )

http.createServer( ( req , res ) => {
  res.writeHead( 200 , {'Content-Type': 'text/html'} )
  res.write('Hello World!')
  res.end()
} ).listen( 8080 )

O primeiro argumento do res.writeHead()método é o código de status, 
200 significa que tudo está OK, o segundo argumento é um objeto que contém os cabeçalhos de resposta.


Leia a string de consulta
A função passada para o arquivo http.createServer() possui um reqargumento que 
representa a solicitação do cliente, como um objeto (objeto http.IncomingMessage).

Este objeto tem uma propriedade chamada "url" que contém a parte do URL que vem após o nome do domínio:

const http = require( 'http' )
http.createServer( ( req , res ) => {
  res.writeHead( 200, { 'Content-Type': 'text/html' } )
  res.write( req.url )
  res.end()
} ).listen( 8080 )

*/