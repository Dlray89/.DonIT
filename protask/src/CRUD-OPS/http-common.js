import axios from "axios"

export default axios.create({
    baseURL:'https://4000-be2312b4-5dc0-4c74-a70b-8cf84f4fadd5.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})