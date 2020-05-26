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
        <div style={{border:"solid 2px red", width:"100%", padding:'1%', background:"linear-gradient(to right, #000046, #1cb5e0)", textAlign:'center', height:'94vh'}}>
           {submitted ? (
               <div>
                   <p style={{color:'white'}}>UP NEXT</p>
                   <p style={{color:'white'}}>ADD A TAG </p>
                   <Link to='/addtags'><Button variant='outlined' onClick={newTask}>
                       next: Add a tag
                       </Button></Link>
               </div>
           ) : (
               <div style={{border:"solid 2px yellow", width:"50%", margin:"0 auto", padding:'1%', background:"white"}}>
                    <p>Create new Task</p>
                    <div style={{margin:"2% 0"}}>
                       <TextField
                       
                      style={{width:'50%'}}
                       
                        type='text'
                        id='project_id'
                        required
                        value={task.project_id}
                        onChange={handleChange}
                        name='project_id'
                        label="project_id"
                         />
                   </div>

                   <div style={{margin:"2% 0"}}>
                       
                       <TextField
                       style={{width:"50%"}}
                       
                        type='text'
                        id='task_Name'
                        required
                        value={task.task_Name}
                        onChange={handleChange}
                        name='task_Name'
                        label='Task Name 1'
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