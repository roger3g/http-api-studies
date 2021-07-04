function createUser (db, user) {
  return db.run(`
    INSERT INTO users (
      name
    ) VALUES (
      "${user.name}"
    );
  `)
}

module.exports = createUser