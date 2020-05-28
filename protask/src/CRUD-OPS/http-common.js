import axios from "axios"

export default axios.create({
    baseURL:'https://4000-b928f559-5901-41f3-ba5b-4c701109a0ae.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})