function createUsers (db, user) {
  return db.run(`
    INSERT INTO users (
      name,
      age
    ) VALUES (
      "${user.name}",
      "${user.age}"
    );
  `)
}

module.exports = createUsers