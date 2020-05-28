import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Card, CardHeader, Button, makeStyles, TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    plRoot:{
        width:'100%',
        padding:'1%',
    },
    cardRoot:{
        display:'flex',
        justifyContent:"space-between",
        margin:'1% 0',
        padding:'1%',
        width:"90%"
    },
    Button:{
        
    },
    btnRoot:{
        
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-evenly"

    },
    TextField:{
        width:'100%'
    }
}))



const ProjectList = () => {
    const classes = useStyles()
    const [projects, setProjects] = useState([])
    // const [ loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')


    useEffect(() => {
        axios
        .get('https://4000-b928f559-5901-41f3-ba5b-4c701109a0ae.ws-us02.gitpod.io/api/projects')
        .then(res => {
            const projectList = res.data.filter(project => 
                project.project_name.toLowerCase().includes(query.toLowerCase()))
                setProjects(projectList)
                
        })
    }, [query])

    const changeHandler = e => {
        setQuery(e.target.value)
    }

    return (
   
        <div className={classes.plRoot}>
        <Autocomplete
  id="combo-box-demo"
  options={projects}
  getOptionLabel={(option) => option.project_name}
  style={{ width: 300 }}
  renderInput={(params) =>  <TextField {...params}  label="Search..." className={classes.TextField} onChange={changeHandler} />}
/>
               
                <p>You currently have {projects.length} Project active</p>
            <div>
                {projects.map(project => (
                       <Card variant='outlined' className={classes.cardRoot}>
                           <CardHeader style={{display:'flex'}} title={project.project_name} subheader={project.details} />
                        
                           

                        <div className={classes.btnRoot}>
                          <Link to={`/projects/${project.id}`}> <Button variant='outlined' className={classes.Button}>View Project</Button></Link>

                           </div>
                           
                       </Card>
                ))}
               
             
            </div>

        </div>
    )
}

export default ProjectList