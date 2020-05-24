import axios from "axios"

export default axios.create({
    baseURL:'https://5000-dbd33d06-65e0-40f3-85ef-a17160f76b31.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})