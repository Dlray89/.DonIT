import React, { useState } from "react"
import crudOps from "../CRUD-OPS/crud_operations"

const AddProject = () => {
    const initialProjectState = {
        id: null,
        project_name: '',
        details:''
    }

    //define and set initial state
    const [project, setProjects] = useState(initialProjectState)
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
            console.log("prject create", res.data)
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
                   <button onClick={newProject}>
                       Create
                       </button>
               </div>
           ) : (
               <div>
                   <div>
                       <p>Create new project</p>
                       <input
                        type='text'
                        id='project_name'
                        required
                        value={project.project_name}
                        onChange={handleChange}
                        name='project_name'
                         />
                   </div>
                   <div>
                       <input
                        type='text'
                        id='details'
                        required
                        value={project.details}
                        onChange={handleChange}
                        name='details'
                         />
                   </div>
                   <div>
                       <button onClick={saveProject}>Submit</button>
                   </div>
               </div>
           )}

        </div>
    )
}

export default AddProject