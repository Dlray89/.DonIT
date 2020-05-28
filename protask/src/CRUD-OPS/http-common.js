import axios from "axios"

export default axios.create({
    baseURL:'https://4000-ca638cf8-a649-4c7d-8baa-569dfa90f906.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})