const userDb = require('../../knex-Config/db.config')

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return userDb('users').select('id', 'username')
}

function findBy(filter) {
    return userDb('users').where(filter)
}

function findById(id) {
    return userDb('users').where({ id }).first()
}

async function add(user){
    const [id] = await userDb('users')
    .insert(user, 'id')

    return findById(id)
}