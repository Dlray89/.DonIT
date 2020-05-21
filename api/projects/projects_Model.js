const DB = require("../../knex-Config/db.config")

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    
}

function find(){
return DB("projects")
}

function findById(id) {
return DB("projects")
.where({id})
.first()
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
    .then(count => (count > 0 ? get(id) : null ))
}

function remove(id){
    return DB.update('projects')
    .where('id', id)
    .del
}