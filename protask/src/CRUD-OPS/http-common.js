import axios from "axios"

export default axios.create({
    baseURL:'https://4000-c43c803a-0ccb-44a5-b1b3-998398b4ceca.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})