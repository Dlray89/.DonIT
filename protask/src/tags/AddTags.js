import React, { useState } from "react"
import { Link } from "react-router-dom"
import TagOps from "../CRUD-OPS/TagsCrud"
import {TextField, Button} from "@material-ui/core"

const AddTag = () => {
    const initialTagState = {
        id: null,
        name: '',
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
            name: tag.name,
            project_id:tag.project_id
        }

            //function to get task state and send post req
        TagOps.createTag(data)
        .then(res => {
            setTag({
                id: res.data.id,
                name: res.data.name,
                project_id:res.data.project_id
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
        <div>
           {submitted ? (
               <div>
                   <p>You submitted successfully</p>
                   <Link to='/projects'><button onClick={newTag}>
                       Go to Projects
                       </button></Link>
               </div>
           ) : (
               <div>
                   <div>
                       <p>Create new Tag</p>
                       <TextField
                       variant="outlined"
                        type='text'
                        id='name'
                        required
                        value={tag.name}
                        onChange={handleChange}
                        name='name'
                        placeholder='Tag name'
                         />
                   </div>
                   <div>
                      
                   </div>
                   <div>
                       <Button variant='outlined' onClick={saveTag}>Submit</Button>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddTag