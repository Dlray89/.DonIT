
exports.up = function(knex) {
  return knex.schema.createTable('journals', function(journal) {

        journal.increments().unique()

        journal.string("title", 124).notNullable()
        journal.string("journal_content", 500)

        journal
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        journal.foreign('project_id')
  })
};

exports.down = function(knex) {
  
};
