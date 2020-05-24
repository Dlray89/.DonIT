import React from "react"
import { Link } from "react-router-dom"
import { List, ListItem, ListItemText, makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
        sbRoot:{
           
            background:"linear-gradient(to right, #000046, #1cb5e0);",
            width:'15%',
            height:'100vh'
        },
        listRoot: {
            
            padding:'1%',
            marginTop:'70%'
        },
        listButton:{
            
        },
        listText:{
            
            textAlign:'center',
            color:"white"
        },
        listLink: {
            textDecoration:'none',
            color:'white'
        }
}))
const SideBar = () => {

    const classes = useStyles()

    return(
        <div className={classes.sbRoot}>
            <div>
                <List className={classes.listRoot}>

                <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to="/" className={classes.listLink}>Home</Link>
                        </ListItemText>
                    </ListItem>

                    <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to="/projects" className={classes.listLink}>Projects</Link>
                        </ListItemText>
                    </ListItem>

                  

                    <ListItem button className={classes.listButton}>
                        <ListItemText className={classes.listText}>
                            <Link to='/tasks' className={classes.listLink}>Task</Link>
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