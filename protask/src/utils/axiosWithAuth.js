import axios from 'axios'



export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token')


    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:'https://4000-de4fd779-d2de-485a-81dd-3890c5e70a96.ws-us02.gitpod.io/'
    
    })
    
}

