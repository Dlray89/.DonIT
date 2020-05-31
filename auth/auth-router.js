const Router = require('express').Router()
const bcrpyt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const AuhtData = require('../api/users/userModel')

Router.post('/register', (req, res) => {

    const userInfo = req.body


    //hashing password
    const ROUNDS = process.env.HASHING_ROUND || 8
    const hashing = bcrpyt.hashSync(userInfo.password, ROUNDS)

    userInfo.password = hashing

    AuhtData
    .add(userInfo)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}: Something went wrong with your registeration! Please try again!`})
    })
})


//set up login here
Router.post('/login', (req, res) => {

    const { username, password} = req.body
    AuhtData
    .findBy({ username })
    .first()
    .then(user => {
            if (user && bcrpyt.hashSync(password, user.password)) {
                const TOKEN = generatedToken(user)

                res.status(200).json(TOKEN)
            } else {
                res.status(401).json({ errorMessage: 'You enter invail credentails'})
            }
    })
    .catch(err => {
        res.status(500).json({ errorMessage:` ${err}: Something went wrong when your login credentials! Try again`})
    })
})

function generatedToken(user) {
    const payload = {
        username: user.username
    }

    const secret = process.env.JWT_SECRET || 'Information is safe and secure'
    const options = {
        expiresIn:'1h'
    }

    return JWT.sign(payload, secret, options)
}


module.exports = Router