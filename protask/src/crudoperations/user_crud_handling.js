import { header } from '../utils/authenication_header'

export const usercrud = {
    login,
    logout,
    signup,
    getAll,
    getById,
    Update,
    Delete,
}

function handleresponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statustext;
            return Promise.reject(error)
        }
        return data
    })
}

function signup(users){
    const requestoptions = {
        method: "POST",
        header: { "Content-Type" : 'application/json'},
        body: JSON.stringify(users)
    }
    return fetch('https://prohash-backend.herokuapp.com/api/auth/register', requestoptions)
    .then(handleresponse)
    .then(user => {
        console.log("Signup", user)
    })
}


function login(username, password) {
    const requestoptions = {
        method: "POST",
        header: { "Content-Type" : 'application/json'},
        body: JSON.stringify({ username, password})
    }

    return fetch('https://prohash-backend.herokuapp.com/api/auth', requestoptions).then(handleresponse).then(user => {
        localStorage.setItem('user', JSON.stringify({ user, password}))
        return login
    })
}

function logout() {
    localStorage.removeItem('user')
}

function getAll() {
    const requestoptions = {
        method: "GET",
        header: header()
    }

    return fetch('https://prohash-backend.herokuapp.com/api/users', requestoptions).then(handleresponse)
}

function getById() {
    const requestoptions = {
        method: 'GET',
        header: header()
    }
    return fetch('https://prohash-backend.herokuapp.com/api/users/:id', requestoptions).then(handleresponse)
}


function Update(user) {
    const requestoptions = {
        method: "PUT",
        header: { ...header(), "Content-Type" : 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch(`https://prohash-backend.herokuapp.com/api/users/${user.id}`, requestoptions).then(handleresponse)
}

function Delete(id) {
    const requestoptions = {
        method: "DELETE",
        header: header()
    }
    return fetch(`https://prohash-backend.herokuapp.com/api/users/${id}`, requestoptions).then(handleresponse)
    
}

