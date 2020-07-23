import React, { useState } from "react"
import { Link } from "react-router-dom"
import TaskOps from "../crudoperations/tasksCRUD"
import {TextField, Button} from "@material-ui/core"

const AddTask = () => {
    const initialtaskState = {
        id: null,
        taskname: '',
        // project_id: '',
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
            taskname: task.taskname,
            // project_id:task.project_id
        }

            //function to get task state and send post req
        TaskOps.createTask(data)
        .then(res => {
            setTasks({
                id: res.data.id,
                taskname: res.data.taskname,
                // project_id:res.data.project_id
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
        <div style={{width:"100%", padding:'1%', background:"grey", textAlign:'center', height:'94vh'}}>
           {submitted ? (
               <div>
                   <p style={{color:'white'}}>UP NEXT</p>
                   <p style={{color:'white'}}>ADD A TAG </p>
                   <Link to='/addtags'><Button style={{color:'white', border:'solid 1px white'}} variant='outlined' onClick={newTask}>
                       next: Add a tag
                       </Button></Link>
               </div>
           ) : (
               <div style={{border:"solid 1px white", width:"50%", margin:"8% auto", padding:'1%', background:"linear-gradient(to right, #000046, #1cb5e0)"}}>
                    <p style={{color:'white'}}>Create new Task</p>
                    <div style={{margin:"2% 0"}}>
                       {/* <TextField
                       
                      style={{width:'50%'}}
                       
                        type='text'
                        id='project_id'
                        required
                        value={task.project_id}
                        onChange={handleChange}
                        name='project_id'
                        label="project_id"
                        InputLabelProps={{
                            style:{color:'white'}
                        }}
                         /> */}
                   </div>

                   <div style={{margin:"2% 0"}}>
                       
                       <TextField
                       style={{width:"50%"}}
                       
                        type='text'
                        id='taskname'
                        required
                        value={task.taskname}
                        onChange={handleChange}
                        name='taskname'
                        label='Create a task'
                        InputLabelProps={{
                            style:{color:'white'}
                        }}
                         />
                   </div>
                  
                   <div>
                       <Button style={{color:'white', border:'solid 1px white'}} variant='outlined' onClick={saveTask}>Submit</Button>
                       <Link to='/'><Button style={{color:'white', border:'solid 1px white'}}>Cancel</Button></Link>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddTask