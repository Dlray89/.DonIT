import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Card, CardHeader, CardContent, CardActionArea, Button, Typography, Divider} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    dashRoot: {
      
        width:'100%',
        padding:'1%'
    },
    dashHub:{
         border:'solid 2px blue',
    },
    mainCard: {
        border:'solid 2px black',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'

    },
    hubCards: {
        textAlign:'center',
        width:"40%",
        margin:" 1% 0",
        border:'solid 1px #000046'
    },
    Links:{
        textDecoration:'none',
        color:'white'
    }
}))

const ContentBlock = () => {
const classes = useStyles()
    return(
        <div className={classes.dashRoot}>
        <Card className={classes.mainCard}>
        


            <Card variant="outlined" color='primary' className={classes.hubCards}>
            <CardHeader title='New Project' subheader="Get started with a brand new project here!" />
            <Divider />
            <CardContent>
                <Typography>Stay on track towards your goals by starting a new project. Let us guide you to success</Typography>
            </CardContent>
                <CardActionArea>
                    <Link to='/addproject' className={classes.Links}><Button variant="outlined" color='primary'>New Project</Button></Link>
                   
                </CardActionArea>
            </Card>

            <Card variant="outlined" className={classes.hubCards}>
               <CardHeader title='New Task' subheader="Add some tasks toward completing your current projects" />
               <Divider />
            <CardContent>
                <Typography>Create new task to finish up your projects even faster. Finish an old one and get started with a new one</Typography>
            </CardContent>
                <CardActionArea>
                    <Button variant="outlined" color='primary'>New Task</Button>
                
                </CardActionArea>
            </Card>

            <Card variant="outlined" className={classes.hubCards}>
                <CardHeader title='journal Entries' subheader="Log important notes to never forget your last though!" />
                <Divider />
            <CardContent>
                <Typography>Create and record important, topics, discoveries, errors, and much more</Typography>
            </CardContent>
                <CardActionArea>
                    <Button variant="outlined" color='primary'>New Entry</Button>
                 
                </CardActionArea>
            </Card>

            <Card variant="outlined" className={classes.hubCards}>
                <CardHeader title='New Items' subheader="Add a to do list to get small tasks done!" />
                <Divider />
            <CardContent>
                <Typography>Add a To list to keep your focus on completing all of your projects and tasks</Typography>
            </CardContent>
                <CardActionArea>
                    <Button variant="outlined" color='primary'>new To Do List</Button>
               
                </CardActionArea>
            </Card>

            </Card>
        </div>
    )
}

export default ContentBlock