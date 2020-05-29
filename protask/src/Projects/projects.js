import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PopUp from "reactjs-popup"
import TgCRUDOps from "../CRUD-OPS/TagsCrud"
import TaskCRUD from "../CRUD-OPS/tasksCRUD"
import crud_operations from "../CRUD-OPS/crud_operations"
import { Button, Card, CardHeader, CardContent, CardActionArea, Typography, Divider, makeStyles, ListItem, List, ListItemText, Chip, TextField } from "@material-ui/core"
import Modal from "../Components/Modal"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from "@material-ui/icons/Done"
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import TagsCrud from "../CRUD-OPS/TagsCrud"

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        height:'100vh',
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
        project_name: '',
        details: '',


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
    const [color, setColor] = useState(true)
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

    const TasksHandleChange = e => {
        const { name, value } = e.target
        setCurrentTasks({ ...currentTask, [name]: value })
    }


    // set up put request here for projects
    const updateProject = e => {
        e.preventDefault()

        crud_operations.updateProject(currentProjects.id, currentProjects)
            .then(res => {
                console.log(res.data)
                setCurrentProjects(res.data)
            })
            .catch(err => console.log(err))
            .finally(window.location.reload())

    }
    //set up PUT request here
    const updateTask = e => {
        e.preventDefault()
        TaskCRUD.updateTask(currentTask.id, currentTask)
            .then(res => {
                console.log(res.data)
                setCurrentTasks(res.data)
            })
            .catch(err => console.log(`${err}: Something went wrong trying to update you tasks`))
        // .finally(window.location.reload())
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
                props.hissory.push('/projects/:id')
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


                    <PopUp contentStyle={{ color: "blue", textAlign: 'center' }} trigger={<DeleteIcon />}>
                        <p style={{ color: 'black' }}>Are you sure you want to delete?</p>
                        <CheckCircleTwoToneIcon onClick={deleteProject} />
                        <HighlightOffTwoToneIcon />

                    </PopUp>


                    <PopUp position='bottom left' contentStyle={{ width: '40%', margin: '0', textAlign: 'center' }} trigger={<EditIcon />}>
                        <div style={{ padding: '1%' }}>
                            <Typography style={{ color: 'white', background: 'linear-gradient(to right, #000046, #1cb5e0)' }}>Edit your project here</Typography>
                        </div>

                        <div>

                            <form key={currentProjects.id}>
                                <div>

                                    <TextField
                                        style={{ margin: "3% 0", width: "70%" }}
                                        label='Project Name'
                                        variant='outlined'
                                        type='text'
                                        id='project_name'
                                        name='project_name'
                                        value={currentProjects.project_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>

                                    <TextField
                                        style={{ margin: "3% 0", width: '80%' }}
                                        multiline
                                        rows={5}
                                        variant='outlined'
                                        label="Project Detail's"
                                        type='text'
                                        id='details'
                                        name='details'
                                        value={currentProjects.details}
                                        onChange={handleChange}
                                    />
                                    <Typography color='black '>Update Task</Typography>
                                    <div style={{ border: 'solid 2px lightgrey', display: 'flex', justifyContent: "space-evenly", alignContent: 'center', textAlign: 'center', width: '90%', margin: '0 auto', padding: '1%', background: 'lightgrey' }}>



                                        <TextField variant='outlined'
                                            style={{ margin: "3% 0", width: '50%' }}
                                            placeholder="Task"
                                            type='text'
                                            id='task_Name'
                                            name='task_Name'
                                            value={currentTask.task_Name}
                                            onChange={TasksHandleChange} 
                                            multiline/>
                                        <div style={{ textAlign: 'center', margin: "6% auto" }}>
                                            <Button variant='outlined' onClick={updateTask}>Save Task</Button>
                                        </div>

                                    </div>


                                </div>
                                <Button style={{ background: 'linear-gradient(to right, #000046, #1cb5e0)', color: 'white', marginTop: '3%' }} variant='outlined' onClick={updateProject}>Update</Button>

                            </form>
                        </div>
                    </PopUp>

                </div>

               



                <div style={{display:'flex', justifyContent:'space-evenly', padding:'1%'}}>
                  
                <Card style={{width: "35%", textAlign: 'center', background: 'grey', color: 'white', border:'solid 1px white' }}>
                    <CardHeader title={`Project Details`} />
                    <Divider style={{width:'40%', background:'white', margin:'0 auto'}}  />
                 
                    <CardContent>
                        <Typography>
                            {currentProjects.details}
                        </Typography>
                    </CardContent>


                    <List >
                        

                        <Divider style={{ background: "white", textAlign:'center' }} />
                        <h3>Project Tasks</h3>
                        <Divider style={{width:'35%', background:'white', margin:'0 auto'}}  />
                        <ListItem style={{textAlign:'center'}}>

                            <ListItemText key={currentTask.project_id}>
                                {currentTask.task_Name}
                            </ListItemText>
                        </ListItem>
                    </List>
                    <CardActionArea>

                        <Button style={{background:'linear-gradient(to right, #000046, #1cb5e0)', color:'white'}} variant='outlined'>View Tasks</Button>

                        <Link to={`${currentTask.id}/tasks`}><Button>See Tasks</Button></Link>

                    </CardActionArea>
                </Card>
               



               <Divider style={{background:'red'}} orientation='vertical' />
                



                    <Card style={{ border: 'solid 1px white', width: "45%", background: "grey", color: "white", textAlign:'center' }}>
                        <CardHeader title='Journal' subheader='A place where you can keep your thoughts discovers and issues' />
                        <Divider style={{ background: "white" }} />
                        <CardContent>Journal Goes here</CardContent>
                        <CardActionArea>

                            <Button style={{background:'linear-gradient(to right, #000046, #1cb5e0)', color:'white'}} variant='outlined'>View Journal's</Button>
                        </CardActionArea>
                    </Card>

                </div>
           

                <Divider />
                <div style={{width:'60%', padding:"1%"}}>
                    <h5>Tags:</h5>
                    <Chip label={currentTags.name}
                        deleteIcon={<DoneIcon onClick={deleteTag} />}
                    />
                    </div>
                </Card>





        </div>
    )
}

export default Projects