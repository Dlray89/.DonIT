import React, { useState } from "react"
import { Link } from "react-router-dom"
import crudOps from "../CRUD-OPS/crud_operations"
import TaskOps from "../CRUD-OPS/tasksCRUD"
import TagOps from "../CRUD-OPS/TagsCrud"
import {TextField, Button, Divider} from "@material-ui/core"
import { number } from "prop-types"

const AddProject = () => {
    const initialProjectState = {
        id: null,
        project_name: '',
        details:'',
        
    }

    const initialTaskState = {
        id:null,
        task_Name:'',
        project_id:Number
    }

    const initialTagState = {
        id: null,
        name:"",
        project_id:number
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
        setProjects({...project, [name]: value})
    }

    const taskChangeHandler = e => {
        const { name, value } = e.target
        setTask({...task, [name]: value })
    }

    const tagChangeHandler = e => {
        const { name, value } = e.target
        setTag({...tag, [name]: value})
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
        let data ={
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
        <div>
           {submitted ? (
               <div>
                    <p>The project id is {project.id}</p>    
                   
                   <Link to='/addtasks'><button onClick={newProject}>
                       Next: Add a task
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