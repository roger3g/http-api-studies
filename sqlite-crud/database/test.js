const Database = require( './db.js' )
const createUsers = require( './createUsers.js' )

Database.then(async db => {
  // inserir dados na tabela
  // await createUsers(db, {
  //   name: 'Roger Luiz',
  //   age: '17'
  // })

  // consultar dados da tabela
  const selectedUsers = await db.all('SELECT * FROM users')
  console.log(selectedUsers)

  // consultar somente 1 usuário pelo id
  // const user = await db.all('SELECT * FROM users WHERE id = "4"')
  // console.log(user)

  // deletar dado da tabela
  // console.log(await db.run( 'DELETE FROM users WHERE id = "1"' )) // Deletar dado por id
  // console.log(await db.run( 'DELETE FROM users' )) // Deletar todos os dados
})