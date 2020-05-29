const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    //destructing auth from the header
    const { authorization } = req.header;

    const secret = process.env.JWT_SECRET || "good"

    if(authorization) {
        jwt.verify(authorization, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message:` Can't validate credentials`})
            } else {
                req.decodedToken = decodedToken


                next()
            }})
    } else {
        res.status(400).json({ message: 'Wrong credentials'})
    }
}