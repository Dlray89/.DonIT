
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        {id: 1, title: 'Enjoyment', journal_content:'My day at the shelter was amazing. I have met new friends. I feel bad because im going back to my home and they dont have a home', project_id: 1},
        {id: 2, title: 'Diffcultites', journal_content:'Today i ran into a few issues with node.js. WHich is my back-end for my project management application. ', project_id:2},
        {id: 3, title: 'today was a good day', journal_content:'Today was great.I got alot of work done on the application and not only that everything seems to be working on the front end', project_id:3},
        {id: 4, title: 'today was a good day', journal_content:'Today was great.I got alot of work done on the application and not only that everything seems to be working on the front end', project_id:4}
      ]);
    });
};
