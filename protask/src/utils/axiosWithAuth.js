import axios from 'axios'



export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token')


    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:'https://4000-c43c803a-0ccb-44a5-b1b3-998398b4ceca.ws-us02.gitpod.io/'
    
    })
    
}

