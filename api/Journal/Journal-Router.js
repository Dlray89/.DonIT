const express = require('express')

const db = require('./Journal-Model')

const router = express.Router()

router.get('/', (req,res) => {
    db
    .find()
    .then(journal => {
        res.status(200).json(journal)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}: Sorry could not retrive journals`})
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params

    db
    .findById(id)
    .then(journal => {
        res.status(200).json(journal)
    })
    .catch(err => {
        res.status(500).json({errorMessage: `${err}: Sorry we could not retrieve this specific journal entry`})
    })
})

router.post('/', (req,res) => {
    const newJournal = req.body

    db
    .add(newJournal => {
        res.status(201).json(newJournal)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}: Sorry we could new add your journal`})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const updateJournal = req.body

    db
    .update(id, updateJournal)
    .then(updateJournal => {
        res.status(201).json(updateJournal)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: ` Sorry We could not update your journal entry`})
    })
})

router.delete('/:id', (req,res) => {
    const { id } = req.params

    db
    .remove(id)
    .then(delJournal => {
        res.status(200).json(delJournal)
    })
    .catch(err => {
        res.status(500).json({errorMessage: `${err}: Sorry something happened! We couldn't delete your journal`})
    })
})



module.exports = router