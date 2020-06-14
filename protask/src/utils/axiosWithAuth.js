import axios from 'axios'



export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token')


    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:'https://4000-da3eb0ef-41c2-4157-b3b6-062fd248edd0.ws-us02.gitpod.io/'
    
    })
    
}

