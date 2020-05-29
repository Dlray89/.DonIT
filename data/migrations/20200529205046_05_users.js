
exports.up = function(knex) {
  return knex.schema.createTable('users', function(user) {
      user.increments()


      user.string('name', 128).notNullable().unique()

      user.string('password', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
