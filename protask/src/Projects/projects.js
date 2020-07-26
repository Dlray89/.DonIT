import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../Components/SideBar"
import PopUp from "reactjs-popup"
import TgCRUDOps from "../CRUD-OPS/TagsCrud"
import TaskCRUD from "../CRUD-OPS/tasksCRUD"
import crud_operations from "../CRUD-OPS/crud_operations"
import JournalCRUD from "../CRUD-OPS/JournalCRUD"
import { Button, Card, CardHeader, Divider, makeStyles, ListItem, List, ListItemText, Chip, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Checkbox } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        width: "100%",
        background: "linear-gradient(to left, #bdc3c7, #2c3e50)",
        boxSizing: 'border-box',
        height:'100vh'

    },
    rootCard: {
        border: "solid 1px red",
        width: "50%",
        textAlign: "start-end",
        background: "linear-gradient(to right, #000046, #1cb5e0)",
        color: "white",
        boxSizing: 'border-box'
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
        name: '',
        details: '',
        createdAt: ''


    }

    const initialTaskState = {
        id: null,
        name: '',
        project_id: null
    }



    const classes = useStyles()
    const [currentProjects, setCurrentProjects] = useState(initialProjects)
    const [currentTask, setCurrentTasks] = useState(initialTaskState)
    const [currentTags, setCurrentTags] = useState([])
    const [open, setOpen] = useState(false)
    const [deleteopen, setDeletedopen] = useState(false)



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
                console.log('tags', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getTasks = id => {
        TaskCRUD.getTaskById(id)
            .then(res => {
                setCurrentTasks(res.data)
                console.log('tasks', res.data)
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

    const hanldeOpen = () => {
        setOpen(true)
    }

    const close = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        setDeletedopen(true)
    }

    const handleDeleteClose = () => {
        setDeletedopen(false)
    }



    const handleChange = e => {
        const { name, value } = e.target
        setCurrentProjects({ ...currentProjects, [name]: value })
    }

    const TasksHandleChange = e => {
        const { name, value } = e.target
        setCurrentTasks({ ...currentTask, [name]: value })
    }

    const updateStatus = status => {
        let data = {
            id: currentProjects.id,
            name: currentProjects.name,
            details: currentProjects.details,
            isCompleted: status
        }

        crud_operations.updateProject(currentProjects, data)
            .then(res => {
                setCurrentProjects({
                    ...currentProjects, isCompleted: status
                })
            })
            .catch(err => {
                console.log(err)
            })
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
                props.history.push('/projects/:id')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className={classes.mainRoot}>

            <Card style={{ margin: '3% auto', width: '86%',display: 'flex', justifyContent: "space-between", background:'#bdc3c7' }}>
                <div style={{width: '40%', padding: '1%', fontSize: '24px' }}>{currentProjects.name}</div>

                <Divider orientation="vertical" />

                <div style={{padding: '1%', width: '40%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <Link to='/dashboard' style={{textDecoration:"none"}}><Button style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} variant='outlined'>Home</Button></Link>
                    <Button style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} variant='outlined' onClick={handleDelete}>Delete</Button>
                    <Dialog open={deleteopen} onClose={handleDeleteClose}>
                        <DialogTitle>Are you Sure you want to delete?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Button onClick={deleteProject}>Yes</Button>
                                <Button onClick={handleDeleteClose}>No</Button>
                            </DialogContentText>

                        </DialogContent>
                    </Dialog>

                    <Button style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} variant='outlined' onClick={hanldeOpen}>Update</Button>
                    <Dialog  open={open} onClose={close}>
                        <DialogTitle >Update your project and task here. Make sure everything is looking how you want it.</DialogTitle>
                        <Divider />
                        <DialogContent >
                            <DialogContentText>
                                <div>
                                    <div style={{ width:'100%', textAlign:'center'}}>
                                        <TextField
                                            style={{ width:'100%', textAlign:'center'}}
                                            label='Project Name'
                                            variant='outlined'
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={currentProjects.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            style={{ width:'100%', textAlign:'center', margin:'3% 0%'}}
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
                                    </div>
                                    <Divider />

                                    <DialogTitle>
                                        Update Task
                                         </DialogTitle>
                                        <div style={{display:'flex',  justifyContent:'space-between'}}>
                                            <div style={{width:'60%'}}>
                                            <TextField variant='outlined'
                                                style={{ margin: "3% 0", width: '100%' }}
                                                placeholder="Task"
                                                type='text'
                                                id='name'
                                                name='name'
                                                value={currentTask.name}
                                                onChange={TasksHandleChange}
                                                multiline />
                                                </div>
                                            <div style={{width:"40%", padding:'1%', textAlign:'center'}}>
                                                <Button style={{margin:'5% 0%'}} variant='outlined' onClick={updateTask}>Save Task</Button>

                                            </div>

                                        </div>
                                        <Divider />
                                        <div>
                                            <Button style={{ background: 'linear-gradient(to left, #bdc3c7, #2c3e50)', color: 'white', marginTop: '3%' }} variant='outlined' onClick={updateProject}>Update</Button>
                                            <Button onClick={close}>Cancel</Button>
                                        </div>
                                   
                                </div>
                            </DialogContentText>
                        </DialogContent>

                    </Dialog>

                    <Link to='/projects'><Button style={{background:'linear-gradient(to left, #bdc3c7, #2c3e50)', color:'white'}} variant='outlined'>Back</Button></Link>
                </div>
            </Card>

            <div style={{ display: 'flex', width: "95%", margin: '0 auto' }}>
                <Card style={{ width: '40%', margin: '0 auto', background:'#bdc3c7'}}>
                    <CardHeader style={{ textAlign: 'center', background:'linear-gradient(to right, #bdc3c7, #2c3e50)',color:'white' }} title='Project Details' subheader={currentProjects.createdAt} />
                    <Divider />
                    <div style={{padding:'2%', textAlign:'center' }}>
                        {currentProjects.details}
                    </div>
                </Card>

                <Card style={{ width: '40%', margin: '0 auto', background:'#bdc3c7' }}>
                    <CardHeader style={{textAlign:'center', background:'linear-gradient(to right, #bdc3c7, #2c3e50)', color:'white' }} title='Tasks to complete'/>
                    <Divider />

                    <List>
                        <ListItem button>
                            <ListItemText>
                                <FormControlLabel 
                                value='demo'
                                control={<Checkbox color='primary' />}
                                label={currentTask.taskname}
                                labelPlacement='haha'
                            
                                
                                />
                                </ListItemText>
                        </ListItem>
                    </List>
                </Card>

            </div>
        </div>
    )
}

export default Projects