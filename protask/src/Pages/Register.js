import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { TextField, Button, AppBar, Toolbar, Typography, Divider, withStyles, Card } from "@material-ui/core";
import LOGO from "../logo/ProHASH.png";
import "../LESS/login-register.less";
import "./login.css";



export default class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handlesignup = e => {
        this.setState({
            credentials: {
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
                window.localStorage.setItem('TOKEN', res.data.payload)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Card style={{border: 'solid 1px black'}} variant='outlined' className='maincont' >
                <form className='formcontainer' onSubmit={this.register}>

                    <div className='imgcontainer'>
                        <img className='firstimg' src={LOGO} />
                    </div>

                    <Divider style={{background:'black', margin: ' 0% auto'}}  orientation='vertical' />


                    <div className='innerform'>
                        <Typography className='bartitle'>
                            Register
                        </Typography>
                        <Divider style={{background:'black', width:'70%', margin: ' 0 auto'}} />
                        <div className='inputcontainer'>
                            <TextField
                            className='input'
                            style={{margin: '2% auto', width: '80%'}}
                                variant='outlined'
                                label='username'
                                name='username'
                                type='text'
                                value={this.state.credentials.username}
                                onChange={this.handlesignup}
                                inputMode='text'
                                InputProps={{
                                    style: {
                                        color: 'black',
                                        textAlign: 'center'
                                        
                                    }
                                }}

                                InputLabelProps={{
                                    style: {
                                        color: 'black',
                                        textAlign: 'center',
                                       
                                    }
                                }}
                            />
                        

                        
                            <TextField
                            style={{margin: '4% auto', width: '80%'}}
                            className='input'
                                variant='outlined'
                                label='password'
                                name='password'
                                type="text"
                                value={this.state.credentials.password}
                                onChange={this.handlesignup}
                                inputProps={{
                                    style: {
                                        color: 'black',
                                        textAlign: 'center'
                                    }
                                }}

                                InputLabelProps={{
                                    style: {
                                        color: 'black',
                                        border: 'solid 2xp black',
                                        textAlign: 'center'
                                    }
                                }}
                            />
                        </div>

                        <div className='btncontainer'>
                            <button className='button' variant='contained'>Sign-in</button>

                            <div><Link to='/'><Button style={{ color: 'black' }}>Need an account? Sign-up here</Button></Link></div>
                        </div>
                    </div>
                </form>
            </Card>
        )
    }
}