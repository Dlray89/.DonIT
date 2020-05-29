const express = require('express')

const router = express.Router()

const db = require('./userModel')

router.get('/', (res, req) => {
    db.find().then(user => {
        res.json(user)
    })
    .catch(err => res.setEncoding(err))
})


module.exports = router