
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, name: 'StandForHunger', project_id:1},
        {id: 2, name: 'React', project_id:2},
        {id: 3, name: 'TopFive', project_id:3}
      ]);
    });
};
