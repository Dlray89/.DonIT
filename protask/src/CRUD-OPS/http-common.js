import axios from "axios"

export default axios.create({
    baseURL:'https://4000-dd52103a-d061-4a7c-b9b9-87b7fe38ed11.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})