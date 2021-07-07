
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl
        .increments()
      tbl
        .string('firstName', 50)
        .notNullable()
      tbl
        .string('lastName', 150)
        .notNullable()
      tbl
        .string('email', 150)
        .notNullable()
        .unique()
      tbl
        .string('username', 50)
        .notNullable()
        .unique()
      tbl
        .string('password', 500)
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
