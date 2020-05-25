
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(tasks) {
      tasks.increments().unique()


      tasks.string('task_Name', 128).notNullable()
        //projectKey
      tasks.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .unique()

      tasks
      .foreign('project_id')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tasks')
};
