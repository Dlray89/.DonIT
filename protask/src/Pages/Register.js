import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { TextField, Button, AppBar, Toolbar, Typography, Divider, withStyles, Card } from "@material-ui/core";
import LOGO from "../logo/ProHASH.png";
import "../LESS/login-register.less";
import "./login.css";

//state management
import { connect } from "react-redux"
import { actionuser } from '../reduxaction'
import { register } from "../serviceWorker";
import { signup } from "../reducers/signupreducer";


class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange = e => {
        const { name, value } = e.target;
        const { credentials } = this.state
        this.setState({
            credentials: {
                ...credentials,
                [name]: value
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault()

        this.setState({ submitted: true })

        const { credentials } = this.state
        if (credentials.username && credentials.password) {
            this.props.signup(credentials)
        }
    }

    render() {

        const { signingup } = this.props
        const { credentials, submitted } = this.state
        return (
            <Card style={{ border: 'solid 1px black' }} variant='outlined' className='maincont' >
                <form className='formcontainer' onSubmit={this.handleSubmit}>

                    <div className='imgcontainer'>
                        <img className='firstimg' src={LOGO} />
                    </div>

                    <Divider style={{ background: 'black', margin: ' 0% auto' }} orientation='vertical' />


                    <div>
                        <Typography className='bartitle'>
                            Register
                        </Typography>
                        <Divider style={{ background: 'black', width: '70%', margin: ' 0 auto' }} />
                        <div className={'inputcontainer' + (submitted && !credentials.username ? "has error" : '')}>
                            <TextField
                                className='input'
                                style={{ margin: '2% auto', width: '80%' }}
                                variant='outlined'
                                label='username'
                                name='username'
                                type='text'
                                value={credentials.username}
                                onChange={this.handleChange}
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
                            {submitted && !credentials.username && <p>username is required</p>}
                            </div>


                            <div className={'inputContainer' + ( submitted && credentials.password ? 'has error' : '')}>
                            <TextField
                                style={{ margin: '4% auto', width: '80%' }}
                                className='input'
                                variant='outlined'
                                label='password'
                                name='password'
                                type="text"
                                value={credentials.password}
                                onChange={this.handleChange}
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
                            {submitted && !credentials.password && <p>
                                password is required
                                </p>}
                            </div>

                        <div className='btncontainer'>
                            <button className='button' variant='contained'>Sign-in</button>
                            {signingup}

                            <div><Link to='/'><Button style={{ color: 'black' }}>Need an account? Sign-up here</Button></Link></div>
                        </div>
                    </div>
                </form>
            </Card>
        )
    }
}

function mapsStateToProps(state) {
    const { signing_up } = state.signup
    return {signing_up }
}

const action = {
    signup: actionuser.signup
}

const connectedRegister = connect(mapsStateToProps, action)(Signup)
export { connectedRegister as Signup}