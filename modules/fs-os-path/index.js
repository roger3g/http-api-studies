const fs = require( 'fs' )
const os = require( 'os' )
const path = require( 'path' )

const { freemem, totalmem, arch, endianness, platform, type, uptime, version, hostname } = os
const { open, appendFile, readFile, unlink } = fs

const total = parseInt( totalmem() / 1024 / 1024 ) // Converter para Mega bytes
const mem = parseInt( freemem() / 1024 / 1024 )    // Converter para Mega bytes
const percents = parseInt( ( mem / total ) * 100 ) // Converter para Mega bytes
const activeMinutes = parseInt( uptime() / 60 )    // Converter para minutos

const newDate = new Date()
const hours = newDate.getHours()
const minutes = newDate.getMinutes()
const seconds = newDate.getSeconds()

const content = {
  property1: type(),                                      // Tipo de sistema operacional                 
  property2: version(),                                   // Versão do kernel                      
  property3: platform(),                                  // Sistema operacional                 
  property4: arch(),                                      // Arquitetura da CPU                      
  property5: endianness(),                                // Endianness da CPU                
  property6: hostname(),                                  // Nome do host                          
  property7: `${total} MB`,                               // Memória total em megabytes                   
  property8: `${mem} MB`,                                 // Memória livre em megabytes                       
  property9: `${percents} %`,                             // Porcentagem da memória em uso         
  property10: `${activeMinutes} minutos`,                 // Tempo que a máquina está ativa        
  property11: `${hours} h : ${minutes} m : ${seconds} s`  // Horário pelo sistema operacional
}

const fileName = 'info.txt'
const text = content

function createFile () { // Criar o arquivo
  open( path.join( __dirname, `/${fileName}`), 'w', (err) => {
    if ( err ) throw err
      console.log( 'File created!' )
  })
}

function updateFile () { // Atualizar o arquivo
  appendFile( path.join( __dirname, `/${fileName}`), text, (err) => {
    if ( err ) throw err
      console.log( 'File updated!' )
  })
}

function readFileContent () { // Ler o arquivo
  readFile( path.join( __dirname, `/${fileName}`), 'utf8', (err) => {
    if ( err ) throw err
      data()
  })
}

function deletFile () { // Deletar o arquivo
  unlink( path.join( __dirname, `/${fileName}`), (err) => {
    if ( err ) throw err
      console.log( 'File deleted!' )
  })
}

function data () {
  console.log( '-------------------- INFO ----------------------' )
  console.log( `Operating System Type..: ${content.property1}`)
  console.log( `Kernel version.........: ${content.property2}`)
  console.log( `Operational system.....: ${content.property3}`)
  console.log( `CPU architecture.......: ${content.property4}`)
  console.log( `CPU endianness.........: ${content.property5}`)
  console.log( `Hostname...............: ${content.property6}`)
  console.log( `Total memory...........: ${content.property7}`)
  console.log( `Free memory............: ${content.property8}`)
  console.log( `Memory in use..........: ${content.property9}`)
  console.log( `Uptime.................: ${content.property10}`)
  console.log( `Hours..................: ${content.property11}`)
  console.log( '------------------------------------------------' )
}

setTimeout( () => {
  console.clear()
} , 1000 )

setTimeout( createFile , 2000 )
setTimeout( updateFile , 3000 )

setTimeout( () => {
  console.clear()
  readFileContent()
} , 4000 )

setTimeout( deletFile , 5000 )
