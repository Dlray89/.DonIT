const express = require('express')

const db = require('./tasks_Model')

const router = express.Router()

//set up get request
router.get('/', (req,res) => {
    db
    .find()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Could not find all tasks`})
    })
})

//set up get request by id
router.get('/:id', (req,res) => {
    const { id } = req.params

    db
    .findById(id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Something happened grabbing your task`})
    })
})


//set up POST request
router.post('/', (req,res) => {
    const newTask = req.body

    db
    .add(newTask)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Could not post a new task`})
    })
})


//set up PUT request here
router.put('/', (req,res) => {
    const { id } = req.params
    const updateTask = req.body

    db
    .update(id ,updateTask)
    .then(updateTask => {
        res.status(201).json(updateTask)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: SomeThing happened! We could not update your task` })
    })
})

//set up delete here

router.delete('/', (req,res) => {
    const { id } = req.params

    db
    .remove(id)
    .then(delTask => {
        res.status(200).json(delTask)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Something went wrong! We could not delete your task` })
    })
})


module.exports = router