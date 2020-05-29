
const db = require('../../knex-Config/db.config')
module.exports = {
    find,
    findBy,
    findById,
    add,
}

function find() {
    return DB('users')
    .select('id', 'username')
}

function findBy(filter) {
    return DB('users')
    .where(filter)
}

function findById(id) {
    return DB('users')
    .where({ id })
    .first()
}

async function add(user) {
    const { id } = await DB('users')
    .insert(user, 'id')

    return findById(id)
}

