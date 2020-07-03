exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, task_Name: "Gather Supplies for people to survive on a daily bases", project_id: 1 },
        { id: 2, task_Name: "Use React and Node.js", project_id: 2 },
        { id: 3, task_Name: "Get Material", project_id: 3 },
      ]);
    });
};
