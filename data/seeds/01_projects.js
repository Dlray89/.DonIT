
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Feed The Homeless', details:'Plan a project to feed the homeless in the downtown areas'},
        {id: 2, project_name: 'Create Project management App', details:'Create a Project management app using react and node.js'},
        {id: 3, project_name: 'Movie App', details:'Organized movies collection to find my favorite and put them in special places'}
      ]);
    });
};
