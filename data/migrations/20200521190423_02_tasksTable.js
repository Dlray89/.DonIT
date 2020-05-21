
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(tasks) {
      tasks.increments().unique()


      tasks.string('task_Name', 128).unique()
        //projectKey
      tasks.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tasks')
};
