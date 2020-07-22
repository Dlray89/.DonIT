import React from "react"
import { Link } from "react-router-dom"
import { List, ListItem, ListItemText, makeStyles, Button} from "@material-ui/core"
import LOGO from "../logo/ProHASH.png"

const useStyles = makeStyles((theme) => ({
        sbRoot:{
           display:'flex',
           flexDirection:'column',
           
            background:"linear-gradient(to left, #d3cce3, #e9e4f0);",
            width:'15%',
            height:'120vh',
            borderRight: 'solid black 1px',
           
            padding:'1%'
        },
        listRoot: {
            
            padding:'1%',
        },
        listButton:{
            
        },
        listText:{
            
            textAlign:'center',
            color:"white"
        },
        listLink: {
            textDecoration:'none',
            color:'black'
        }
}))

const logout = () => {
        localStorage.clear("token")
        this.props.history.push('/')
    }
const SideBar = props => {

    

    const classes = useStyles()

    return(
        <div className={classes.sbRoot}>

        <div style={{textAlign:'center',padding:'1%', margin:'10% 0',}}>
        <img style={{width:"80%", borderRadius:"50%"}} src={LOGO} />
        </div>

            <div style={{padding:"1%", marginTop:"5%"}}>
                <List className={classes.listRoot}>

                <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to="/dashboard" className={classes.listLink}>Home</Link>
                        </ListItemText>
                    </ListItem>

                    <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to="/projects" className={classes.listLink}>Projects</Link>
                        </ListItemText>
                    </ListItem>

                  

                    <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to='/calendar' className={classes.listLink}>Calendar</Link>
                        </ListItemText>
                    </ListItem>

                    <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to='/journals' className={classes.listLink}>Journal</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>

                
        </div>
    )
}

export default SideBar