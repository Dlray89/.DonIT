import axios from "axios"

export default axios.create({
    baseURL:'https://4000-e979e25f-37c6-4bf8-8b4c-1f400695306c.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})