import React, { useState, useEffect} from "react"
import CRUDOps from "../CRUD-OPS/crud_operations"
import crud_operations from "../CRUD-OPS/crud_operations"
import { Card, CardHeader,} from "@material-ui/core"
import Modal from "../Components/Modal"

const Projects = props => {

    const initialProjects = {
        id: null,
        project_name:'',
        details: '',
        
    }

    const [currentProjects, setCurrentProjects] = useState(initialProjects)
    const [currentTags, setCurrentTags] = useState([])
    const [message, setMessage] = useState('')


    //get request to get all projects
    const getProject = id => {
        CRUDOps.getProjectById(id)
        .then(res => {
            setCurrentProjects(res.data)
            console.log("projects",res.data)

            
            setCurrentTags(res.data.tags)
            console.log('tags', res.data.tags)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProject(props.match.params.id)
    },[props.match.params.id])

    const handleChange = e => {
        const { name, value} = e.target
        setCurrentProjects({...currentProjects, [name]: value})
    }


    // set up put request here
    const updateProject = () => {
        var data = {
            id: currentProjects.id,
            project_name: currentProjects.project_name,
            details: currentProjects.details,
           
           
        }

        crud_operations.updateProject(currentProjects.id, data)
        .then(res => {
            setCurrentProjects({
                id: res.data,
                project_name:res.data,
                details:res.data,
                
              
            })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const update = () => {
        crud_operations.updateProject(currentProjects.id, currentProjects)
        .then(res => {
            console.log("updateCRUD OP funtion",res.data)
            setMessage('Your project was updated')
        })
        .catch(err => {
            console.log(err)
        })
    }


    //set delete project here
    const deleteProject = () => {
        crud_operations.removeProject(currentProjects.id)
        .then(res => {
            console.log("delete crud",res.data)
            props.history.push('/projects')
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <Card variant="outlined" >
                <CardHeader title={currentProjects.project_name} subheader={currentProjects.details} />
            
                
            </Card>
            
          <div>
              <Modal updateProject={updateProject} update={update} title={currentProjects.project_name} details={currentProjects.details} onChange={handleChange} />
          </div>
            <p>{currentTags.name}</p>
           {currentProjects ? (
               <div>
                   <p>Project</p>
                   <form>
                       <div>
                           <p>Project name</p>
                           <input
                           type='text'
                           id='project_name'
                           name='project_name'
                           value={currentProjects.project_name}
                           onChange={handleChange}
                              />
                       </div>
                       <div>
                           <p>Details</p>
                           <input
                           type='text'
                           id='details'
                           name='details'
                           value={currentProjects.details}
                           onChange={handleChange} 
                            />
                       </div>
                   </form>
                   {currentProjects? (
                       <button onClick={() => updateProject(false)}>
                        Cancel
                        </button>
                   ) : (
                       <button onClick={() => updateProject(true)} > 
                       Change
                       </button>
                   )}

                   <button onClick={deleteProject} > Delete </button>
                   <button onClick={update} >Update</button>
                   <p>{message}</p>
               </div>
           ) : (
               <div>
                   <br />
                   <p>PLease click on a project</p>
               </div>
           )}
        </div>
    )
}

export default Projects