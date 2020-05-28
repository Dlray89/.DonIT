const DB = require("../../knex-Config/db.config")

const mapper = require("../helper/mappers")

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    getProjectTasks,
    getProjectTags
    
}

function find(){
return DB("projects")
}

function findById(id) {
    return DB('projects').where({ id}).first()
}

function add(project){
return DB("projects")
.insert(project, 'id')
.then(ids => ({ id: ids[0]}))
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

function getProjectTasks(projectId) {
    return DB('tasks')
    .where('project_id', projectId)
    .then(tasks => tasks.map(task => mapper.taskToBody(task)))
}

function getProjectTags(projectId){
    return DB('tags')
    .where('project_id', projectId) 
    .then(tags => tags.map(tag => mapper.tagsToBody(tag)) )
}