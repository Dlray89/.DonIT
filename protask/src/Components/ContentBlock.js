import React from "react"
import { Link } from "react-router-dom"
//material-ui core compoenents
import { makeStyles, Card, CardHeader, CardContent, CardActionArea, Button, Typography, Divider, } from "@material-ui/core"

//material-ui labs
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab'

import SettingsBar from "./SettingsBar"
import axios from 'axios'
//other libraries
import { Empty } from "antd"
import Calendar from "react-material-ui-calendar"

const useStyles = makeStyles((theme) => ({
    dashRoot: {
        background: "linear-gradient(to bottom, #bdc3c7, #2c3e50);",
        margin: '0',
        width: '83vw',

    },
    dashHub: {
        border: 'solid 2px blue',
    },
    mainCard: {
        width: "100%",
        margin: '0 auto',
        padding: "1%",
        color: 'white',
        display: 'flex',
        justifyContent: "space-between",
        boxSizing: "border-box"

    },
    GetStarted: {
        textAlign: 'center',
        width: "100%",
        justifyContent: 'space-between',
        boxSizing: "border-box",
        marginTop: "2%",
        color: "black",

    },
    Links: {
        textDecoration: 'none',
        color: 'white'
    }
}))

const ContentBlock = () => {

    const classes = useStyles()
    const [projects, setprojects] = React.useState([])
    const sortedProjects = projects.sort(function (a, b) {
        return a.createdAt - b.createdAt
    })
    console.log('sorted', sortedProjects)


    React.useEffect(() => {
        axios.get('https://prohash-backend.herokuapp.com/api/projects')
            .then(res => {
                const projectslist = res.data
                setprojects(projectslist)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [setprojects])



    return (
        <div className={classes.dashRoot}>
            <div >
                <SettingsBar />
            </div>

            


            <div className={classes.mainCard}>


                <Card variant="outlined" style={{ width: '48.5%', height: '50vh', background:'linear-gradient(to right, #d3cce3, #e9e4f0)', color:'white' }}>
                    <CardHeader  style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', textAlign: 'center', color:'white' }} title='Get Started' />
                    <Divider style={{ background: 'black', }} />
                    <div variant="outlined" color='primary' className={classes.GetStarted}>

                        <div style={{ width: "50%", margin: '3% auto' }}>
                            <Typography > Create a new project and keep track of your daily goals</Typography>

                        </div>

                        <div style={{ width: '40%', margin: '0 auto' }}>
                            <Link to='/addproject' className={classes.Links}><Button variant="outlined" color='primary' style={{ color: 'black', width: '100%', margin: '2% auto' }}>Create Project</Button></Link>
                        </div>
                    </div>


                </Card>





                <Card style={{ width: '50%', textAlign: 'center', background:'linear-gradient(to right, #d3cce3, #e9e4f0)', textAlign:'center', color:'white', overflowY:'scroll', height:'60vh' }}>
                    <CardHeader style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)'}} title='Your Timeline' />

                    <Divider />
                    {sortedProjects.map(project => (

                        <Timeline style={{}} align='alternate'>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography style={{color:'black'}}>
                                        {project.createdAt}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography style={{color:'black'}}>
                                        {project.name}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>

                        </Timeline>
                    ))}
                </Card>
            </div>
        </div >
    )
}

export default ContentBlock