const crypto = require( 'crypto' )

const { randomBytes , createCipheriv } = crypto

const algorithm = 'aes-256-cbc'
const password = ':6b%J3)p=.}b;h};.qupG=U+DbZv[w}{'

console.log( encryptData( 'Roger' ) )

function encryptData ( value ) {
  const iv = Buffer.from( randomBytes( 16 ) )
  const cipher = createCipheriv( algorithm , Buffer.from( password ) , iv )
  let encrypted = cipher.update( value )
  encrypted = Buffer.concat( [ encrypted , cipher.final() ] )
  return encrypted.toString( 'hex' )
}