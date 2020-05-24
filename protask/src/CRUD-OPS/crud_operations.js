import http from "./http-common"

const getAllProjects = () => {
    return http.get('/api/projects')
}

const getProjectById = id => {
    return http.get(`/api/projects/${id}`)
}

const createProject = data => {
    return http.post('/api/projects', data)
}

const updateProject = (id, data) => {
    return http.put(`/api/projects/${id}`, data)
}

const removeProject = id => {
    return http.delete(`/api/projects/${id}`)
}

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    removeProject
}

//an crud service export that handles all crud functionality