import React, { useState } from "react"
import { Link } from "react-router-dom"
import TaskOps from "../CRUD-OPS/tasksCRUD"
import {TextField, Button, Card, CardHeader, CardContent, CardActionArea} from "@material-ui/core"

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
        <div style={{ width: "100%", textAlign: 'center', padding: "1.4%", background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)'}}>
           {submitted ? (
               <div style={{width:'100%', padding:"14.4%", boxSizing:'border-box'}}>
                <Card>
                    <CardHeader  />
                    <CardContent>
                    <p style={{ color: 'black' }}>UP Next</p>
                    <p style={{ color: 'black' }}>Add a tag!</p>
                    <Link to='/addtags'><Button variant='outlined' onClick={newTask}>
                        Next: Add a tag
                       </Button></Link>
                       </CardContent>
                </Card>
                </div>
            
           ) : (
               <div style={{width: "100%", padding: "13%", margin: "1% auto", background: "black", background: "linear-gradient(to bottom, #bdc3c7, #2c3e50);", color: 'black', boxSizing:'border-box'}}>
                   <Card style={{width: '60%', margin: '0 auto', background: 'linear-gradient(to right, #d3cce3, #e9e4f0)'}}>
                       <CardHeader style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} title="Create a task for your project"  />
                       <CardContent>
                            <div style={{ boxSizing:'border-box'}}>
                       
                       <TextField
                       style={{width:"50%"}}
                       
                        type='text'
                        id='taskname'
                        required
                        value={task.taskname}
                        onChange={handleChange}
                        name='taskname'
                        label='Create a task'
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

                   <CardActionArea  style={{display:'flex', justifyContent:'space-evenly', margin:'3% 0%'}}>
                      
                       <Button style={{color:'black', border:'solid 1px black'}}  variant='outlined' onClick={saveTask}>Submit</Button>

                       <Link to='/dashboard'><Button style={{color:'black', border:'solid 1px black'}}>Cancel</Button></Link>
                 

                   </CardActionArea>

                       </CardContent>

                   </Card>
                   
                    

                  
                  
                   
               </div>
           )}

        </div>
    )
}

export default AddTask