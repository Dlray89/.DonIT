const express = require('express')

const router = express.Router()

const db = require('./userModel')

router.get('/', (res, req) => {
    db
    .find()
    .then(user => {
        res.json(user)
    })
    .catch(err =>  console.log(err))
})


router.get('/:id', (req,res) => {
    db.findById(req.params.id)
    .then((user) => {
        user
        ? res.status(200).json(user) 
        : res.status(404).json({ message: `User can not be founded`
    })
    .catch(err => {
        res.status(500).json({message: `Error retriving the that specific user`})
    })

})
})

router.get('/username/:username', (req,res) => {
    const { username } = req.params
    db.findByUsername(username)
    .then((user) => {
        user
        ? res.status(200).json(user) 
        : res.status(404).json({ message: `User with that username cannot be founded`
    })
    .catch(err => {
        res.status(500).json({message: ` erro retriving the user with specified username`})
    })
    })
})

module.exports = router