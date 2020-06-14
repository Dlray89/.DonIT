import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Card, CardHeader, CardContent, CardActionArea, Button, Typography, Divider} from "@material-ui/core"
import SettingsBar from "./SettingsBar"

const useStyles = makeStyles((theme) => ({
    dashRoot: {
      background:"grey",
      margin:'0',
        width:'81vw',
        padding:'1%'
    },
    dashHub:{
         border:'solid 2px blue',
    },
    mainCard: {
        
        background:"grey",
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        width:"65%",
        margin:'0 auto',
        padding:"1%",
        color:'white'

    },
    hubCards: {
        textAlign:'center',
        width:"47%",
        margin:" 1% 0",
        border:'solid 1px white',
        boxSizing:"border-box",
        padding:'1%',
        background:'linear-gradient(to right, #000046, #1cb5e0)',
        color:"white"
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
        <div>
            <SettingsBar />
        </div>
       
        <div className={classes.mainCard}>
            

            <div style={{display:"flex", justifyContent:"space-evenly",  margin:'2% 0'}}>
            <Card variant="outlined" color='primary' className={classes.hubCards}>
            <CardHeader title='New Project' subheaderTypographyProps={{color:"white"}} subheader="Get started with a new project today! Crush your goals" />
            <Divider style={{background:"white"}} />
            <CardContent>
                <Typography>Stay on track towards your goals by starting and completing new projects.</Typography>
            </CardContent>
                <CardActionArea>
                    <Link to='/addproject' className={classes.Links}><Button variant="outlined" style={{color:'white',border:'solid 1px white'}}>New Project</Button></Link>
                   
                </CardActionArea>
            </Card>

            

            <Card variant="outlined" className={classes.hubCards}>
                <CardHeader title='Journal Entries' subheaderTypographyProps={{color:"white"}} subheader='Start a journal entry to keep track of discoveries' />
                <Divider style={{background:'white'}} />
            <CardContent>
                <Typography>Create and record important, topics, discoveries, errors, and much more</Typography>
            </CardContent>
                <CardActionArea>
                    <Button style={{color:'white', border:'solid 1px white'}} variant="outlined" color='primary'>New Entry</Button>
                 
                </CardActionArea>
            </Card>
            </div>

            

            </div>
        </div>
    )
}

export default ContentBlock