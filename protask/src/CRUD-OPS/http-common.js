import axios from "axios"

export default axios.create({
    baseURL:'https://5000-f23f26a3-c23b-44d0-9115-a16546a186a0.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})