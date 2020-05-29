
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(tasks) {
      tasks.increments().unique()


      tasks.string('task_Name', 128).notNullable()
        //projectKey
      tasks.integer('project_id')
      .unsigned()
      .notNullable()

       // Created_At
        tasks.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tasks.timestamp('updated_at').defaultTo(knex.fn.now())
      

      tasks
      .foreign('project_id')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tasks')
};
