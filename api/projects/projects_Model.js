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

    let query = DB('projects as p')

    if (id) {
        query.where('p.id', id).first()

        const promises = [query, getProjectTasks(id), getProjectTags(id)]

        return Promise.all(promises).then(function(results) {
            let [project, tasks, tags ] = results
            

            if(project) {
                project.tasks = tasks
                project.tags = tags

                

                return mapper.projectToBody(project)
            } else {
                return null
            }
        
        })
    } else {
        return query.then(projects => {
            return projects.map(project => mapper.projectToBody(project))
        })
    }


}

function add(project){
return DB("projects")
.insert(project, 'id')
.then(ids => ({ id: ids[0]}))
}



function update(id, changes){
    return DB('projects')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null ))
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