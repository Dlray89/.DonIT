import React, { useState, useEffect} from "react"
import TgCRUDOps from "../CRUD-OPS/TagsCrud"
import TaskCRUD from "../CRUD-OPS/tasksCRUD"
import crud_operations from "../CRUD-OPS/crud_operations"
import { Card, CardHeader, CardContent,} from "@material-ui/core"
import Modal from "../Components/Modal"

const Projects = props => {

    const initialProjects = {
        id: null,
        project_name:'',
        details: '',
        isActive:false
        
    }

    const [currentProjects, setCurrentProjects] = useState(initialProjects)
    const [currentTask, setCurrentTasks] = useState([])
    const [currentTags, setCurrentTags] = useState([])
    const [message, setMessage] = useState('')


    //get request to get all projects
    const getProject = id => {
        crud_operations.getProjectById(id)
        .then(res => {
            setCurrentProjects(res.data)
            console.log("projects",res.data)

            
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getTags = id => {
        TgCRUDOps.getTagById(id)
        .then(res => {
            setCurrentTags(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getTasks = id => {
        TaskCRUD.getTaskById(id)
        .then(res => {
            setCurrentTasks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    useEffect(() => {
        getTasks(props.match.params.id)
    },[props.match.params.id])

    useEffect(() => {
        getTags(props.match.params.id)
    },[props.match.params.id])

    useEffect(() => {
        getProject(props.match.params.id)
    },[props.match.params.id])

    const handleChange = e => {
        const { name, value} = e.target
        setCurrentProjects({...currentProjects, [name]: value})
    }


    // set up put request here
    const updateProject = status => {
        var data = {
            id: currentProjects.id,
            project_name: currentProjects.project_name,
            details: currentProjects.details,
            isActive:status

           
           
        }

        crud_operations.updateProject(currentProjects.id, data)
        .then(res => {
            setCurrentProjects({
                ...currentProjects, isActive: status
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

    //set delete tag
    const deleteTag = () => {
        TgCRUDOps.removeTag(currentTags.id)
        .then(res => {
            console.log("res.data")
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <Card variant="outlined" >
                <CardHeader title={currentProjects.project_name} subheader={currentProjects.details} />
                <p>{currentTask.task_Name}</p>
                <CardContent>
                    <p key={currentTags.id}>{currentTags.name} <button onClick={deleteTag} > X </button></p>
                </CardContent>
               
                
               
 
            </Card>
            
          <div>
              <Modal updateProject={updateProject} update={update} title={currentProjects.project_name} details={currentProjects.details} onChange={handleChange} />
          </div>
           
           {currentProjects ? (
               <div>
                   <p>Project</p>
                   <form key={currentProjects.id}>
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
                       <div>
                           <label>
                               <strong>Status</strong>
                           </label>
                           {currentProjects.isActive ? 'COmpleted' : 'Not started'}
                       </div>
                   </form>
                   {currentProjects.isActive ? (
                       <button onClick={() => updateProject(false)}>
                        Cancel
                        </button>
                   ) : (
                       <button onClick={() => updateProject(true)} > 
                       Completed
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