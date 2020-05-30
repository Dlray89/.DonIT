import axios from "axios"

export default axios.create({
    baseURL:'https://4000-c4117731-c249-4f95-994b-ed305164102a.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})