
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(projects) {
      projects.increments()

      projects.string('project_name', 128).notNullable()

      projects.text('details', 400).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExist('projects')
};
