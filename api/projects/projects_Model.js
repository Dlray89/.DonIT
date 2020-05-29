const DB = require("../../knex-Config/db.config")

const mapper = require("../helper/mappers")

module.exports = {
    find,
    findById,
    findTask,
    add,
    remove,
    update,
    getProjectTasks,
    getProjectTags
    
}

function find(){
return DB("projects")
}

async function findById(id) {
    let query = DB('projects as p')

 if (id) {
    query.where('p.id', id).first()

    const promises = [query, getProjectTasks(id)]

    let results = await Promise.all(promises)
     let [project, tasks] = results
     if (project, tasks) {
        //  project.tasks = tasks
             return mapper.projectToBody(project);
     }
     else {
         return null;
     }
} else {
    const projects = await query
     return projects.map(project => mapper.taskToBody(project))
}
}

function findTask(id) {
    return DB('projects')
    .join('tasks', 'tasks.id', 'tasks.project_id')
    .select(
        'tasks.id',
        'tasks.task_Name',
        'tasks.project_id',
    )
    .where('project_id', id)
}

async function add(project){
    const ids = await DB("projects")
        .insert(project, 'id')
    return ({ id: ids[0] })
}



function update(id, changes){
    return DB('projects')
    .where('id', id)
    .update(changes, '*')
    
}

function remove(id){
    return DB('projects')
    .where('id', id)
    .del()
}

async function getProjectTasks(projectId) {
    const tasks = await DB('tasks')
        .where('project_id', projectId)
    return tasks.map(task => mapper.taskToBody(task))
}

async function getProjectTags(projectId){
    const tags = await DB('tags')
        .where('project_id', projectId)
    return tags.map(tag => mapper.tagsToBody(tag))
}