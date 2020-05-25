
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(projects) {
      projects.increments().unique()

      projects.string('project_name').notNullable()

      projects.text('details', 400).notNullable()

      projects.boolean('isActive').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
