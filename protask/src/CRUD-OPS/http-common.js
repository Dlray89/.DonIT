import axios from "axios"

export default axios.create({
    baseURL:'https://4000-ff89267f-2c46-4646-ba90-c18b86270fe2.ws-us02.gitpod.io/',
    headers: {
        'Content-type' : 'application/json'
    }
})