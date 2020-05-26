import axios from "axios"

export default axios.create({
    baseURL:'https://4000-cd234cc2-f7d6-44b3-9e43-69ac69f6b0ea.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})