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
        background: "grey",
        margin: '0',
        width: '83vw',

    },
    dashHub: {
        border: 'solid 2px blue',
    },
    mainCard: {
        background: "grey",
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
        border: 'solid 1px white',
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
            <div>
                <SettingsBar />
            </div>

            <Card variant='outlined' style={{ width: '98%', margin: ' 1% auto', padding: "2%", boxSizing: "border-box" }}>
                DashBoard
        </Card>


            <div className={classes.mainCard}>


                <Card variant="outlined" style={{ width: '48.5%', height: '50vh' }}>
                    <CardHeader style={{ textAlign: 'center' }} title='Get Started' />
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





                <Card style={{ width: '50%', textAlign: 'center' }}>
                    <CardHeader title='Your Timeline' />

                    <Divider />
                    {sortedProjects.map(project => (

                        <Timeline align='alternate'>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography>
                                        {project.createdAt}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
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