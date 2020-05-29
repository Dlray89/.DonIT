const bcrypt = require('bcrypt')
const router = require('express').Router()
const db = require('../api/users/userModel').default
const jwt = require('jsonwebtoken')

router.post('/register', (req,res) => {
    const userInfo = req.body


    //hashing user password
    const ROUNDS = process.env.HASHING_ROUNDS || 8;
    const hashing = bcrypt.hashSync(userInfo.password, ROUNDS)

    userInfo.password = hashing

    db.add(userInfo)
    .then(users => {
        res.status(201).json(users)
    })
    .catch(err => {
        res.status(401).json({errorMessgae: `${err}: Your registration failed`})
    })

    
})

router.post('/login', (req,res) => {
    const { username, password } = req.body


    db.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.hashSync(password, user.password)) {
            const token = generateToken(user)

            res.status(200).json({message: `welcome ${user.username}`, token})
        } else {a

            res.status(401).json({message: ` invaild Credentials`})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: `${err}:`})
    })
})

function generateToken(user) {
    const payload = {
        username: user.username
    }

    const secret = process.env.JWT_SECRET || 'its safe'
    const options = {
        expiresIn: "1h"
    }
    return jwt.sign(payload, secret, options)
}

module.exports = router