//middlewear using express.js
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const session = require("cookie-session")


//connect server to express
const server = express()

//setting up router
const projectRouter = require('./projects/projects_Router')
const taskRouter = require('./tasks/task_router')
const tagRouter = require('./tags/tags_router')


const ExpiryDate = new Date(Date.now() + 60 * 60 * 100)// 1 hour

//use middlewear here
server.set('trust-poxy', 1)
server.use(session({
    name: "RandomSessionName",
    keys:['key 1', 'key 2'],
    cookie: {
        secure: true,
        httpOnly: true,
        expires: ExpiryDate
    }
}))

server.use(helmet())
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())
//end of middlewear

//set router endpoints here
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
server.use('./api/tags', tagRouter)

server.get('/api/testing', (req,res) => {
    res.status(200).json({message: `Your server in now up and running`})
})


module.exports = server
