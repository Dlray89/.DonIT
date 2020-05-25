const express = require('express')

const db = require('./tags_model')

const router = express.Router()

//set up get request
router.get('/', (req,res) => {
    db
    .find()
    .then(tag => {
        res.status(200).json(tag)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Could not find all tags`})
    })
})

//set up get request by id
router.get('/:id', (req,res) => {
    const { id } = req.params

    db
    .findById(id)
    .then(tag => {
        res.status(200).json(tag)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Something happened grabbing your tag`})
    })
})


//set up POST request
router.post('/', (req,res) => {
    const newTag = req.body

    db
    .add(newTag)
    .then(newTag => {
        res.status(201).json(newTag)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Could not post a new tag`})
    })
})


//set up PUT request here
router.put('/', (req,res) => {
    const { id } = req.params
    const updateTag = req.body

    db
    .update(id ,updateTag)
    .then(updateTag => {
        res.status(201).json(updateTag)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: SomeThing happened! We could not update your tag` })
    })
})

//set up delete here

router.delete('/:id', (req,res) => {
    const { id } = req.params

    db
    .remove(id)
    .then(delTag => {
        res.status(200).json(delTag)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Something went wrong! We could not delete your tag` })
    })
})


module.exports = router