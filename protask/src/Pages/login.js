import React from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"


export default class Login extends React.Component {
    state = {
        credentials: {
            username:'',
            password:''
        }
    }


    ChangeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/api/auth/login')
        .then(res => {
            window.localStorage.setItem('token', res.data.payload)

            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                    <button>Need an account</button>
                    <div>
                        <form onSubmit={this.login}>
                            <div>
                                <input
                                 required
                                 id='username'
                                 label='username'
                                 type='text'
                                 name='username'
                                 value={this.state.credentials.username}
                                 onChange={this.ChangeHandler}
                                   />
                            </div>

                            <div>
                                <input
                                    required
                                 id='password'
                                 label='password'
                             
                                 type='text'
                                 name='password'
                                 value={this.state.credentials.password}
                                 onChange={this.ChangeHandler}
                                   
                                
                                />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}