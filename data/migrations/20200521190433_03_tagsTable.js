
exports.up = function(knex) {
  return knex.schema.createTable('tags', function(tags) {
      tags.increments().unique()

      tags.string('name', 128).notNullable().unique()

      tags.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')

      

      tags.foreign('project_id')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tags')
};
