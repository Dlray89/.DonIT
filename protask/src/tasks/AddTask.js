import React, { useState } from "react"
import { Link } from "react-router-dom"
import TaskOps from "../CRUD-OPS/tasksCRUD"
import {TextField, Button} from "@material-ui/core"

const AddTask = () => {
    const initialtaskState = {
        id: null,
        task_Name: '',
        project_id: '',
    }


    //define and set initial state
    const [task, setTasks] = useState(initialtaskState)
    // const [task, setTask] = useState(initialProjectState)
    const [submitted, setSubmitted] = useState(false)


    //create handleChange to track the values of the input
    const handleChange = e => {
        const { name, value } = e.target
        //set state fo changes
        setTasks({...task, [name]: value})
    }

    const saveTask = () => {
        let data = {
            task_Name: task.task_Name,
            project_id:task.project_id
        }

            //function to get task state and send post req
        TaskOps.createTask(data)
        .then(res => {
            setTasks({
                id: res.data.id,
                task_Name: res.data.task_Name,
                project_id:res.data.project_id
            })
            setSubmitted(true)
            console.log("task create", res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const newTask = () => {
        setTasks(initialtaskState)
        setSubmitted(false)
    }

    return (
        <div>
           {submitted ? (
               <div>
                   <p>Add a tag</p>
                   <Link to='/addtags'><button onClick={newTask}>
                       next: Add a tag
                       </button></Link>
               </div>
           ) : (
               <div>
                   <div>
                       <p>Create new Task</p>
                       <TextField
                       variant="outlined"
                        type='text'
                        id='task_Name'
                        required
                        value={task.task_Name}
                        onChange={handleChange}
                        name='task_Name'
                        placeholder='Task Name 1'
                         />
                   </div>
                   <div>
                       <TextField
                      
                       variant="outlined"
                        type='text'
                        id='project_id'
                        required
                        value={task.project_id}
                        onChange={handleChange}
                        name='project_id'
                        placeholder="project_id#"
                         />
                   </div>
                   <div>
                       <Button variant='outlined' onClick={saveTask}>Submit</Button>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddTask