import React from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"


export default class Login extends React.Component {
    state = {
        credentials: {
            email:'',
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
        .post('/api/login')
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
                                 id='email'
                                 label='email'
                                 defaultValue='email'
                                 type='text'
                                 name='email'
                                 value={this.state.credentials.email}
                                 onChange={this.ChangeHandler}
                                   />
                            </div>

                            <div>
                                <input
                                    required
                                 id='password'
                                 label='password'
                                 defaultValue='password'
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