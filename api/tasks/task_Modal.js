const DB = require("../../knex-Config/db.config")

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
return DB("tasks")
.where({id})
.first()
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