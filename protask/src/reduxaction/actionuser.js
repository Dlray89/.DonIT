import { usermessages } from '../reduxmessages'

import { usercrud } from "../crudoperations/user_crud_handling"
import { alertinfo } from "./alertinfo"
import { history } from '../utils/history'


export const actionuser = {
    login,
    logout,
    signup,
    getAll,
    Delete
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }))

        usercrud.login(username, password)
            .then(user => {
                dispatch(success(user))
                history.push('/dashboard')
            },
                error => {
                    dispatch(failure(error.toString()))
                }
            )
    }
    function request(user) { return { type: usermessages.login_reques, user } }

    function success(user) { return { type: usermessages.login_success, user } }

    function failure(error) { return { type: usermessages.signup_failure, error } }
};

//logout
function logout() {
    usercrud.logout()
    return {type: usermessages.logout}
}

function signup(user) {
    return dispatch => {
        dispatch(request(user))
        usercrud.signup(user)
        .then(user => {
            dispatch(success())
            history.push('/login')
            dispatch(alertinfo.success('Sign-up successful'))
        },
        error => {
            dispatch(failure)
            dispatch(alertinfo.error(error))
        }
        )
    }

    function request(user) { return { type: usermessages.signup_request, user } }

    function success(user) { return { type: usermessages.signup_success, user } }

    function failure(error) { return { type: usermessages.signup_failure, error } }
}

function getAll() {
    return dispatch => {
       dispatch(request())

       usercrud.getAll()
       .then(users => dispatch(success(users)),
       error => dispatch(failure(error))
       
       )
    }
    function request() { return { type: usermessages.getALL_request} }

    function success(user) { return { type: usermessages.getALL_success, user } }

    function failure(error) { return { type: usermessages.getALL_failure, error } }
}


function Delete(id) {
    return dispatch => {
        dispatch(request(id))

        usercrud.Delete(id)
        .then( user => dispatch(success(id)),
                error => dispatch(failure(error))
        )
    }

    function request(id) { return { type: usermessages.delete_request, id } }

    function success(id) { return { type: usermessages.delete_success, id} }

    function failure(error, id) { return { type: usermessages.delete_failure, error, id } }
}