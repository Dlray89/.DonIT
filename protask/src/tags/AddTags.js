import React, { useState } from "react"
import { Link } from "react-router-dom"
import TagOps from "../CRUD-OPS/TagsCrud"
import {TextField, Button} from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';


const AddTag = () => {
    const initialTagState = {
        id: null,
        tagname: '',
        project_id: '',
    }


    //define and set initial state
    const [tag, setTag] = useState(initialTagState)
    // const [task, setTask] = useState(initialProjectState)
    const [submitted, setSubmitted] = useState(false)


    //create handleChange to track the values of the input
    const handleChange = e => {
        const { name, value } = e.target
        //set state fo changes
        setTag({...tag, [name]: value})
    }

    const saveTag = () => {
        let data = {
            tagname: tag.tagname,
            project_id:tag.project_id
        }

            //function to get task state and send post req
        TagOps.createTag(data)
        .then(res => {
            setTag({
                id: res.data.id,
                tagname: res.data.tagname,
                // project_id:res.data.project_id
            })
            setSubmitted(true)
            console.log("tag create", res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const newTag = () => {
        setTag(initialTagState)
        setSubmitted(false)
    }

    return (
        <div style={{width:"100%", padding:'1%', height:"94vh", background:"linear-gradient(to right, #000046, #1cb5e0)", textAlign:'center'}}>
           {submitted ? (
               <div>
                   <Alert style={{width:"30%", margin:'2% auto'}} severity="success">Project was created successfully — Go to projects!</Alert>
                   <Link to='/projects'><Button style={{color:'white', border:'solid 1px white'}} variant='outlined' onClick={newTag}>
                       Project List
                       </Button></Link>
               </div>
           ) : (
               <div style={{border:'solid 2px white', width:"40%", margin:"8% auto"}}>
                   <div style={{margin:'2% 0'}}>
                       <p style={{color:'white'}}>Create new Tag</p>
                       <TextField
                       variant="outlined"
                        type='text'
                        id='tagname'
                        required
                        value={tag.tagname}
                        onChange={handleChange}
                        name='tagname'
                        label='Create a tag'
                        InputLabelProps={{
                            style: {
                                color:'white'
                            }
                        }}
                         />
                   </div>
                   <div>
                      
                   </div>
                   <div>
                       <Button style={{color:'white', border:'solid 1px white'}} variant='outlined' onClick={saveTag}>Submit</Button>
                       <Link to='/'><Button style={{color:'white', border:'solid 1px white'}}>Cancel</Button></Link>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddTag