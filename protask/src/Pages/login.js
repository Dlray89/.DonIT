import React from "react"
import { Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { TextField, Button, AppBar, Toolbar, Typography} from "@material-ui/core"
import LOGO from "../logo/ProHASH.png"



export default class Login extends React.Component{
    state = {
        credentials:{
            username:'',
            password:''
        }
    }

    loginHandler = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    setLogin = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/api/auth/login', this.state.credentials)
        .then(res => {
            console.log("user Login", res.data.payload)
            window.localStorage.setItem('TOKEN', res.data.payload)
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div style={{textAlign:'center', margin:'3% auto', background:'linear-gradient(to right, #000046, #1cb5e0)', borderRadius:'20px'}}>
                <form onSubmit={this.setLogin}>
                <div>
                    <img style={{width:'30%', borderRadius:'100px', margin:'3% 0'}} src={LOGO}  />
                </div>
                    <div>
                        <AppBar style={{width:'70%', textAlign:'center', margin:'3% auto', border:'solid 1px white', background:'lightgrey'}} position='static'>
                            <Toolbar>
                                <Typography style={{textAlign:'center', margin:'0 auto', color:'black'}}>
                                    Login
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <div>
                            <TextField
                            style={{width:'70%', margin:'3% 0'}}
                            variant='outlined'
                            label='username'
                            name='username'
                            type='text'
                            value={this.state.credentials.username}
                            onChange={this.loginHandler}
                            
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
                            label='password' 
                            name='password'
                            type="text"
                            value={this.state.credentials.password}
                            onChange={this.loginHandler}
                             
                            InputLabelProps={{
                                    style: {
                                        color:'white', 
                                        border:'solid 2xp white' 
                                    }
                                }}
                            />
                        </div>
                        <div style={{margin:'3% 0'}}>
                            <button style={{width:'70%', background:'lightgrey', padding:'1%'}} variant='contained'>Sign-in</button>

                            <div><Link  to='/register'><Button style={{color:'white'}}>Need an account? Sign-up here</Button></Link></div>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}