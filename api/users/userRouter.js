const Router = require('express').Router()

const userDB = require('./userModel')


Router.get('/', (req, res) => {
    userDB
    .find()
    .then(user => {
        res.json(user)
    })
    .catch(err => res.send(err))
})


module.exports = Router