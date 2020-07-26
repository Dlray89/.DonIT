import React, { useState } from "react"
import { Link } from "react-router-dom"
import TagOps from "../CRUD-OPS/TagsCrud"
import { TextField, Button, Card, CardHeader, CardContent, CardActionArea } from "@material-ui/core"
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
        setTag({ ...tag, [name]: value })
    }

    const saveTag = () => {
        let data = {
            tagname: tag.tagname,
            project_id: tag.project_id
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
        <div style={{ width: "100%", padding: '1%', height: "94vh", background: "linear-gradient(to left, #bdc3c7, #2c3e50)", textAlign: 'center' }}>
            {submitted ? (
                <div style={{ width: '100%', padding: "14.4%", boxSizing: 'border-box' }}>
                    <Card>
                        <CardHeader />
                        <CardContent>
                            <Alert style={{ width: "30%", margin: '2% auto' }} severity="success">Project was created successfully — Go to projects!</Alert>

                            <Link to='/projects'><Button style={{ color: 'white', border: 'solid 1px white' }} variant='outlined' onClick={newTag}>
                                Project List
                       </Button></Link>
                        </CardContent>
                    </Card>

                </div>
            ) : (
                    <div style={{ width: "100%", padding: "13%", margin: "1% auto", background: "linear-gradient(to bottom, #bdc3c7, #2c3e50);", color: 'black', boxSizing: 'border-box' }}>
                        <Card style={{ width: '60%', margin: '0 auto', background: 'linear-gradient(to right, #d3cce3, #e9e4f0)' }}>
                            <CardHeader style={{ background: 'linear-gradient(to left, #bdc3c7, #2c3e50)', color: 'white' }} title='Create a tag' />
                            <CardContent>
                                <div style={{ boxSizing: 'border-box' }}>

                                    <TextField
                                        variant="outlined"
                                        type='text'
                                        id='tagname'
                                        required
                                        value={tag.tagname}
                                        onChange={handleChange}
                                        name='tagname'
                                        label='Create a tag'
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
                                    <Button style={{ color: 'black', border: 'solid 1px black' }} variant='outlined' onClick={saveTag}>Submit</Button>

                                    <Link to='/'><Button style={{ color: 'black', border: 'solid 1px black' }}>Cancel</Button></Link>
                                </CardActionArea>

                            </CardContent>
                        </Card>



                    </div>
                )}

        </div>
    )
}

export default AddTag