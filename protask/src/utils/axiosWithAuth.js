import axios from 'axios'



export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')


    return axios.create({
        headers: {
            Authorization: token,
            'Content-type' : 'application/json'
        },
        baseURL:'https://4000-c4117731-c249-4f95-994b-ed305164102a.ws-us02.gitpod.io/'
    
    })
    
}

