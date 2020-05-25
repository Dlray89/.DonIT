import React, { useState } from "react"
import { Link } from "react-router-dom"
import crudOps from "../CRUD-OPS/crud_operations"
import TaskOps from "../CRUD-OPS/tasksCRUD"
import {TextField, Button} from "@material-ui/core"

const AddProject = () => {
    const initialProjectState = {
        id: null,
        project_name: '',
        details:'',
        tasks: {
            task_Name:''
        }
    }


    //define and set initial state
    const [project, setProjects] = useState(initialProjectState)
    // const [task, setTask] = useState(initialProjectState)
    const [submitted, setSubmitted] = useState(false)


    //create handleChange to track the values of the input
    const handleChange = e => {
        const { name, value } = e.target
        //set state fo changes
        setProjects({...project, [name]: value})
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
        <div>
           {submitted ? (
               <div>
                   <p>You submitted successfully</p>
                   <Link to='/projects'><button onClick={newProject}>
                       Go to Projects
                       </button></Link>
               </div>
           ) : (
               <div>
                   <div>
                       <p>Create new project</p>
                       <TextField
                       variant="outlined"
                        type='text'
                        id='project_name'
                        required
                        value={project.project_name}
                        onChange={handleChange}
                        name='project_name'
                        placeholder='Project Name'
                         />
                   </div>
                   <div>
                       <TextField
                       multiline
                       rows={7}
                       variant="outlined"
                        type='text'
                        id='details'
                        required
                        value={project.details}
                        onChange={handleChange}
                        name='details'
                        placeholder="Details of your project"
                         />
                   </div>
                   <div>
                       <Button variant='outlined' onClick={saveProject}>Submit</Button>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddProject