import React, { useState } from "react"
import { Link } from "react-router-dom"
import crudOps from "../CRUD-OPS/crud_operations"
import TaskOps from "../CRUD-OPS/tasksCRUD"
import TagOps from "../CRUD-OPS/TagsCrud"
import { TextField, Button, Divider } from "@material-ui/core"
import { number } from "prop-types"
import  white  from '@material-ui/core/colors'

const AddProject = () => {
    const initialProjectState = {
        id: null,
        project_name: '',
        details: '',

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
            project_name: project.project_name,
            details: project.details
        }

        //function to get project state and send post req
        crudOps.createProject(data)
            .then(res => {
                setProjects({
                    id: res.data.id,
                    project_name: res.data.project_name,
                    details: res.data.details
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
        <div style={{ width: "100%", textAlign: 'center', height: "93vh", padding: "1%", background: 'grey' }}>
            {submitted ? (
                <div>
                    <p style={{ color: 'white' }}>THIS IS YOUR PROJECT-ID: #{project.id}</p>
                    <p style={{ color: 'white' }}>YOU WILL NEED THIS TO ADD A TASK TO GET YOU STARTED!</p>
                    <Link to='/addtasks'><Button variant='outlined' onClick={newProject}>
                        Next: Add a task
                       </Button></Link>
                </div>
            ) : (
                    <div style={{ border: "solid 1px white", width: "50%", padding: "1%", margin: "7% auto", background: "white", background: "linear-gradient(to right, #000046, #1cb5e0)", color: 'white' }}>
                        <div>
                            <p>Create new project</p>
                            <TextField
                                style={{ width: "50%", margin: "3% 0", color:'white', borderBottom: 'solid 1px white' }}
                                label="Project Name"
                                type='text'
                                id='project_name'
                                required
                                value={project.project_name}
                                onChange={handleChange}
                                name='project_name'
                                InputLabelProps={{
                                    style: {
                                        color:'white',    
                                    }
                                }}
                                InputProps={{color:'white'}}

                            />
                        </div>
                        <div>
                            <TextField

                                multiline
                                style={{ width: "45%", marginBottom: "2%", color:'white'}}
                                color='white'
                                rows={7}
                                variant="outlined"
                                type='text'
                                id='details'
                                required
                                value={project.details}
                                onChange={handleChange}
                                name='details'
                                label="Details of your project"
                                InputLabelProps={{
                                    style: {
                                        color:'white',
                                        
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Button style={{color:'white', border:'solid 1px white'}} variant='outlined' onClick={saveProject}>Submit</Button>
                            <Link to='/'><Button style={{color:'white', border:'solid 1px white'}}>Cancel</Button></Link>
                        </div>
                    </div>
                )}

        </div>
    )
}

export default AddProject