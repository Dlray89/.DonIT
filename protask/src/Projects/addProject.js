import React, { useState } from "react"
import { Link } from "react-router-dom"
import TaskOps from '../CRUD-OPS/tasksCRUD'
import crudOps from "../CRUD-OPS/crud_operations"
import TagOps from "../CRUD-OPS/TagsCrud"
import { TextField, Button, Card, CardHeader, CardContent, CardActionArea, Divider } from "@material-ui/core"
import { number } from "prop-types"

const AddProject = () => {
    const initialProjectState = {
        id: null,
        name: '',
        details: '',
        createdAt:''

    }

    const initialTaskState = {
        id: null,
        task_Name: '',
        project_id: Number
    }

    const initialTagState = {
        id: null,
        name: "",
        project_id: number
    }


    //define and set initial state
    const [project, setProjects] = useState(initialProjectState)
    const [task, setTask] = useState(initialTaskState)
    const [tag, setTag] = useState(initialTagState)
    const [submitted, setSubmitted] = useState(false)


    //create handleChange to track the values of the input
    const handleChange = e => {
        const { name, value } = e.target
        //set state fo changes
        setProjects({ ...project, [name]: value })
    }

    const taskChangeHandler = e => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const tagChangeHandler = e => {
        const { name, value } = e.target
        setTag({ ...tag, [name]: value })
    }

    const saveTag = () => {
        let data = {
            name: tag.name,
            project_id: tag.project_id
        }

        TagOps.createTag(data)
            .then(res => {
                setTag({
                    id: res.data.id,
                    name: res.data.name,
                    project_id: res.data.project_id
                })
                setSubmitted(true)
                console.log("tag created", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const newTag = () => {
        setTag(initialTagState)
        setSubmitted(false)
    }

    ///////////////////////////////

    const saveTasks = () => {
        let data = {
            task_Name: task.task_Name,
            project_id: task.project_id
        }

        TaskOps.createTask(data)
            .then(res => {
                setTask({
                    id: res.data.id,
                    task_Name: res.data.id,
                    project_id: res.data.project_id
                })
                setSubmitted(true)
                console.log("task create", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const newTask = () => {
        setTask(initialTaskState)
        setSubmitted(false)
    }

    const saveProject = () => {
        let data = {
            name: project.name,
            details: project.details,
            createdAt: project.createdAt
        }

        //function to get project state and send post req
        crudOps.createProject(data)
            .then(res => {
                setProjects({
                    id: res.data.id,
                    name: res.data.name,
                    details: res.data.details,
                    createdAt: res.data.createdAt
                })
                setSubmitted(true)
                console.log("project create", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const newProject = () => {
        setProjects(initialProjectState)
        setSubmitted(false)
    }
    

    return (
        <div style={{ width: "100%", textAlign: 'center', padding: "1.4%", background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)'}}>
            {submitted ? (
                <div style={{width:'100%', padding:"14.4%", boxSizing:'border-box'}}>
                <Card>
                    <CardHeader  />
                    <CardContent>
                    <p style={{ color: 'black' }}>THIS IS YOUR PROJECT-ID: #{project.id}</p>
                    <p style={{ color: 'black' }}>YOU WILL NEED THIS TO ADD A TASK TO GET YOU STARTED!</p>
                    <Link to='/addtasks'><Button variant='outlined' onClick={newProject}>
                        Next: Add a task
                       </Button></Link>
                       </CardContent>
                </Card>
                </div>
            ) : (
                    <div style={{width: "100%", padding: "4.4%", margin: "1% auto", background: "black", background: "linear-gradient(to bottom, #bdc3c7, #2c3e50);", color: 'black', boxSizing:'border-box', }}>
                        <Card style={{width: '60%', margin: '0 auto', background: 'linear-gradient(to right, #d3cce3, #e9e4f0)'}}>
                            <CardHeader style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} title='Create a project'  />
                            <Divider  />
                            <CardContent>
                                
                                <div style={{ boxSizing:'border-box'}}>
                            <TextField
                            style={{ width: '45%'}}
                            type='date'
                            id='createdAt'
                            required
                            value={project.createdAt}
                            onChange={handleChange}
                            name='createdAt'
                            InputLabelProps={{
                                shrink: true
                            }}
                            
                            />
                            </div>
                            <div style={{ boxSizing:'border-box'}}>
                            <TextField
                                style={{ width: "45%", margin: "3% 0", color:'black', borderBottom: 'solid 1px black' }}
                                label="Project Name"
                                type='text'
                                id='name'
                                required
                                value={project.name}
                                onChange={handleChange}
                                name='name'
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        textAlign: 'center'
                                    }
                                }}

                                InputLabelProps={{
                                    style: {
                                        color: 'black',
                                        border: 'solid 2xp black',
                                        textAlign: 'center'
                                    }
                                }}

                            />
                            </div>

                            

                             <div style={{boxSizing:'border-box'}}>
                            <TextField

                                multiline
                                style={{ width: "45%", marginBottom: "2%", color:'black'}}
                                color='black'
                                rows={7}
                                variant="outlined"
                                type='text'
                                id='details'
                                required
                                value={project.details}
                                onChange={handleChange}
                                name='details'
                                label="Details of your project"
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        // textAlign: 'center'
                                    }
                                }}

                                InputLabelProps={{
                                    style: {
                                        color: 'black',
                                        // textAlign: 'center'
                                    }
                                }}
                            />
                        </div>

                        <CardActionArea style={{display:'flex', justifyContent:'space-evenly'}}>
                            <Button style={{color:'black', border:'solid 1px black'}} variant='outlined' onClick={saveProject}>Submit</Button>
                            <Link to='/dashboard'><Button style={{color:'black', border:'solid 1px black'}}>Cancel</Button></Link>
                        </CardActionArea>
                            </CardContent>
                        </Card>
                       
                        
                    </div>
                )}

        </div>
    )
}

export default AddProject