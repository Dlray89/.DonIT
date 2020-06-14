import axios from "axios"

export default axios.create({
    baseURL:'https://4000-da3eb0ef-41c2-4157-b3b6-062fd248edd0.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})