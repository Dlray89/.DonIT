const express = require('express')

const db = require('./projects_Model')

const router = express.Router()

//set up get request
router.get('/', (req, res) => {
    db
        .find()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({ errorMessage: `${error}: Could not find all projects` })
        })
})

//set up get request by id
router.get('/:id', (req, res) => {
    const { id } = req.params

    db
        .findById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({ errorMessage: `${error}: Something happened grabbing your project` })
        })
})

//set up findTask here
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params

    db.findTask(id)
        .then((tasks) => {
           res.status(200).json(tasks)
        })
        .catch(({ name, message, error, stack }) => {
            res.status(500).json({ name, message, error, stack })
        })
})

//set up POST request
router.post('/', (req, res) => {
    const newProject = req.body

    db
        .add(newProject)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(error => {
            res.status(500).json({ errorMessage: `${error}: Could not post a new Project` })
        })
})


//set up PUT request here
router.put('/:id', (req, res) => {
    const { id } = req.params
    const updateProject = req.body

    db
        .update(id, updateProject)
        .then(updateProject => {
            res.status(201).json(updateProject)
        })
        .catch(error => {
            res.status(500).json({ errorMessage: `${error}: SomeThing happened! We could not update your project` })
        })
})

//set up delete here

router.delete('/:id', (req, res) => {
    const { id } = req.params

    db
        .remove(id)
        .then(delProject => {
            res.status(201).json(delProject)
        })
        .catch(error => {
            res.status(500).json({ errorMessage: `${error}: Something went wrong! We could not delete your project` })
        })
})


module.exports = router