import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Card, CardHeader, Button, makeStyles, TextField } from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
    plRoot: {
        width: '100%',
        padding: '1%',
        background:'grey'
    },
    cardRoot: {
        display: 'flex',
        justifyContent: "space-between",
        margin: '1% 0',
        padding: '1%',
        width: "90%",
        background:'linear-gradient(to right, #000046, #1cb5e0)',
        color:'white'
    },
    Button: {
        background:"white"
    },
    btnRoot: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly",
        

    },
    TextField: {
        width: '100%'
    }
}))



const ProjectList = () => {
    const classes = useStyles()
    const [projects, setProjects] = useState([])
    // const [ loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')


    useEffect(() => {
        axios
            .get('https://4000-e979e25f-37c6-4bf8-8b4c-1f400695306c.ws-us02.gitpod.io/api/projects')
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

            <div>
                <div style={{width: '30%' }}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={projects}
                        getOptionLabel={(option) => option.project_name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search..." className={classes.TextField} onChange={changeHandler} />}
                    />
                </div>
               
            </div>

            <div style={{display: 'flex', justifyContent: "space-between", alignContent: 'center', width: '92%' }}>
                <div style={{color:'white'}}>
                     <p>You currently have {projects.length} Project active</p>
                </div>
                 <div style={{width: '15%', textAlign: 'center' }}>
                    <Link to='/addproject'><Button variant='contained' style={{background:'linear-gradient(to right, #000046, #1cb5e0)', color:"white"}} >New Project</Button></Link>
                </div>
            </div>

           
            <div>
                {projects.map(project => (
                    <Card variant='outlined' className={classes.cardRoot}>
                        <CardHeader subheaderTypographyProps={{color:'white'}} style={{ display: 'flex' }} title={project.project_name} subheader={project.details} />



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