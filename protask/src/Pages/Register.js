import React from "react"
import { Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import {AppBar, Toolbar, Typography, Button, TextField} from "@material-ui/core"
import LOGO from "../logo/ProHASH.png"


export default class Register extends React.Component {
    state = {
        credentials:{
            username:'',
            password:''
        }
    }

    //adding a new user to the database
    registerHandler = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    register = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/api/auth/register', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('TOKEN', res.data.payload )
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
        
    }

    render(){
        return(
            <div style={{textAlign:'center', margin:'3% auto', background:'linear-gradient(to right, #000046, #1cb5e0)', borderRadius:'20px'}}>
                <form onSubmit={this.register}>
                <div>
                    <img style={{width:'30%', borderRadius:'100px', margin:'3% 0'}} src={LOGO}   />
                </div>
                    <div>
                        <AppBar style={{width:'70%', textAlign:'center', margin:'3% auto', border:'solid 1px white', background:'lightgrey'}} position='static'>
                            <Toolbar>
                                <Typography style={{textAlign:'center', margin:'0 auto', color:'black'}}>
                                    Register
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>

                    <div>
                        <TextField
                        style={{width:'70%', margin:'3% 0'}}
                            variant='outlined'
                            label='Create a username' 
                        name='username'
                        type='text'
                        value={this.state.credentials.username}
                        onChange={this.registerHandler} 
                        
                            InputLabelProps={{
                                    style: {
                                        color:'white', 
                                       
                                    }
                                }} 
                        
                        />
                    </div>
                    <div>
                        <TextField 
                        style={{width:'70%', margin:'3% 0'}}
                            variant='outlined'
                            label='Create a password'
                        name='password'
                        type='text'
                        value={this.state.credentials.password}
                        onChange={this.registerHandler}
                        
                            InputLabelProps={{
                                    style: {
                                        color:'white', 
                                        border:'solid 2xp white' 
                                    }
                                }}

                        />
                    </div>
                    <div style={{margin:'3% 0'}}>
                        <button style={{width:'70%', background:'lightgrey', padding:'1%'}} variant='contained'>Sign up</button>
                        <div><Link  to='/'><Button type='submit' style={{color:'white'}}>Already have an account? Login here</Button></Link></div>
                    </div>
                </form>
            </div>
        )
    }
}