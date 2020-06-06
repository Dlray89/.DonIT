import axios from "axios"

export default axios.create({
    baseURL:'https://4000-de4fd779-d2de-485a-81dd-3890c5e70a96.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})