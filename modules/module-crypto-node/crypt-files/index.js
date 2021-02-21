const crypto = require( 'crypto' )
const fs = require( 'fs' )

const algorithm = 'aes-256-ctr'
const password = ':6b%J3)p=.}b;h};.qupG=U+DbZv[w}{'

setTimeout( cryptFiles , 500 ) 
setTimeout( decryptFiles , 1000 )

function cryptFiles () {
  const read = fs.createReadStream( 'data.txt' )
  const write = fs.createWriteStream( 'encrypted.txt' )
  const cipher = crypto.createCipher( algorithm , password )

  read.pipe( cipher ).pipe( write )
}

function decryptFiles () {
  const read = fs.createReadStream( 'encrypted.txt' )
  const write = fs.createWriteStream( 'decrypted.txt' )
  const cipher = crypto.createDecipher( algorithm , password )

  read.pipe( cipher ).pipe( write )
}