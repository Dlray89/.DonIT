const DB = require('../../knex-Config/db.config')


module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return DB('journals')
}

function findById(id){
 return DB('journals')
 .where({ id })
 .first()
}

async function add(journal) {
    const ids = await DB('journals')
    .insert(journal, 'id')
    return ({ id: ids[0]})
}

function update(id, changes) {
    return DB('journals')
    .where('id', id)
    .update(changes, '*')

}

function remove(id) {
return DB('journals')
.where('id', id)
.del()
}