
exports.up = function(knex) {
  return knex.schema.createTable('projects', function(projects) {
      projects.increments()

      projects.string('project_name', 128).notNullable()

      projects.text('details').notNullable()
  })
};

exports.down = function(knex) {
  
};
