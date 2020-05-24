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
return DB("tags")
}

    function findById(id) {

        let query = DB('tags')
       
        if (id) {
            return query
            .where('id', id)
            .first()
            .then(tag => {
                if (tag) {
                    return mapper.tagsToBody(tag)
                } else {
                    return null
                }
            })
        } else {
            return query.then(tags => {
                return tags.map(tag => mapper.tagsToBody(tag))
            })
        }
}

function add(tag){
return DB("tags")
.insert(tag, 'id')
.then(ids => ({ id: ids[0]}))
}

function update(id, changes){
    return DB('tags')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null ))
}

function remove(id){
    return DB.update('tags')
    .where('id', id)
    .del
}