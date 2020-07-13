import axios from "axios"

export default axios.create({
    baseURL:'https://prohash-backend.herokuapp.com/',
    headers: {
        'Content-type' : 'application/json'
    }
})