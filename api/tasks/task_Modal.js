const DB = require("../../knex-Config/db.config")
const mapper = require('../helper/mappers')

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    
}

function find(){
return DB("tasks")
}

function findById(id) {

 let query = DB('tasks')

 if (id) {
     return query
     .where('id', id)
     .first()
     .then(task => {
         if (task) {
             return mapper.taskToBody(task)
         } else {
             return null
         }
     })
 } else {
     return query.then(tasks => {
         return tasks.map(task => mapper.taskToBody(task))
     })
 }


}

function add(task){
return DB("tasks")
.insert(task, 'id')
.then(ids => ({ id: ids[0]}))
}

function update(id, changes){
    return DB('tasks')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null ))
}

function remove(id){
    return DB.update('tasks')
    .where('id', id)
    .del
}