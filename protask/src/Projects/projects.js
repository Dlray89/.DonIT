import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PopUp from "reactjs-popup"
import TgCRUDOps from "../CRUD-OPS/TagsCrud"
import TaskCRUD from "../CRUD-OPS/tasksCRUD"
import crud_operations from "../CRUD-OPS/crud_operations"
import { Button, Card, CardHeader, CardContent, CardActionArea, Typography, Divider, makeStyles, ListItem, List, ListItemText, Chip } from "@material-ui/core"
import Modal from "../Components/Modal"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from "@material-ui/icons/Done"
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

const useStyles = makeStyles((theme) => ({
    mainRoot: {

        width: "100%",
        padding: "1%",
        background: "grey"
    },
    rootCard: {
        border: "solid 1px white",
        width: "100%",
        textAlign: "start-end",
        background: "linear-gradient(to right, #000046, #1cb5e0)",
        color: "white"
    },
    cardTag: {
        display: "flex",
        justifyContent: "space-between",
        width: "12%",
        border: "solid 2px black",
        background: "red",
        color: "white",

        margin: "3% 0"
    },
    tagName: {
        color: "green",
        border: "solid 2px red"
    }
}))

const Projects = props => {

    const initialProjects = {
        id: null,
        project_name: '',
        details: '',
        isActive: false

    }

    const initialTaskState = {
        id: null,
        task_Name: '',
        project_id: null
    }

    const classes = useStyles()
    const [currentProjects, setCurrentProjects] = useState(initialProjects)
    const [currentTask, setCurrentTasks] = useState(initialTaskState)
    const [currentTags, setCurrentTags] = useState([])
    const [message, setMessage] = useState('')


    //get request to get all projects
    const getProject = id => {
        crud_operations.getProjectById(id)
            .then(res => {
                setCurrentProjects(res.data)
                console.log("projects", res.data)


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
    }, [props.match.params.id])

    useEffect(() => {
        getTags(props.match.params.id)
    }, [props.match.params.id])

    useEffect(() => {
        getProject(props.match.params.id)
    }, [props.match.params.id])


    //end of get requests//////////////////////

    const handleChange = e => {
        const { name, value } = e.target
        setCurrentProjects({ ...currentProjects, [name]: value })
    }


    // set up put request here
    const updateProject = status => {
        var data = {
            id: currentProjects.id,
            project_name: currentProjects.project_name,
            details: currentProjects.details,
            isActive: status



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
                console.log("updateCRUD OP funtion", res.data)
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
                console.log("delete crud", res.data)
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
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className={classes.mainRoot}>
            <Card className={classes.rootCard} variant="outlined" >
                <CardHeader title={currentProjects.project_name} subheaderTypographyProps={{ color: "white" }} subheader={`PROJECT-ID: #${currentProjects.id}`} />
                <Divider style={{ background: "white" }} />

                <div style={{ display: 'flex', justifyContent: "space-between", width: "15%", padding: "1%" }}>

                    <Link style={{ textDecoration: "none", color: "white" }} to='/projects' ><ArrowBackIcon /></Link>
                    <Link style={{ textDecoration: "none", color: "white" }} to='/' ><HomeIcon /></Link>

                    
                    <PopUp contentStyle={{color:"blue"}} trigger={<DeleteIcon  />}>
                            <p style={{color:'black'}}>Are you sure you want to delete?</p>
                            <CheckCircleTwoToneIcon onClick={deleteProject} />
                            <HighlightOffTwoToneIcon />
                            
                    </PopUp>
                    
                </div>

                <Card style={{ border: "solid 1px white", width: "40%", margin: ' 2% auto', textAlign: 'center', background: 'grey', color: 'white' }}>
                    <CardHeader title={`Project Details`} />
                    <Divider style={{ background: "white" }} />
                    <CardContent>
                        <Typography>
                            {currentProjects.details}
                        </Typography>
                    </CardContent>

                </Card>

                <CardContent>
                    <div style={{ height: "30vh", padding: "1%", display: "flex", justifyContent: "space-evenly", alignContent: "center" }}>

                        <Card style={{ border: "solid 1px white", width: "45%", textAlign: "center", background: "grey", color: "white" }} >
                            <CardHeader title="Projects Tasks" />


                            <List >

                                <Divider style={{ background: "white" }} />
                                <ListItem>

                                    <ListItemText key={currentTask.project_id}>
                                        {currentTask.project_id}:{currentTask.task_Name}
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <CardActionArea>

                                <Button variant='outlined'>View Tasks</Button>
                            </CardActionArea>
                        </Card>

                        <Card style={{ border: 'solid 1px white', width: "45%", background: "grey", color: "white" }}>
                            <CardHeader title='Journal title goes here' />
                            <Divider style={{ background: "white" }} />
                            <CardContent>Journal Goes here</CardContent>
                            <CardActionArea>

                                <Button variant='outlined'>View Journal's</Button>
                            </CardActionArea>
                        </Card>

                    </div>

                    <div>
                        <h5>Tags:</h5>
                        <Chip label={currentTags.name}
                            onClick={deleteTag}
                            deleteIcon={<DoneIcon />}
                             />

                    </div>
                </CardContent>
                <Divider />



                <div>
                    <Modal updateProject={updateProject} update={update} title={currentProjects.project_name} details={currentProjects.details} onChange={handleChange} />
                </div>

            </Card>



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