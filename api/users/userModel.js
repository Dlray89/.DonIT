
const db = require('../../knex-Config/db.config')

module.exports = {
    find,
    findBy,
    findById,
    findByUsername,
    add,
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function findById(id) {
    return db('users').where({ id }).first()
}

function findByUsername(user) {
    return db('users').where({ username }).first()
}

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(([ id ]) => {
        return this.findById(id)
    })
}

