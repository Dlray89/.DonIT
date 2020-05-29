import http from "./http-common"

const getAllTasks = () => {
    return http.get('/api/tasks')
}

const getTaskById = id => {
    return http.get(`/api/tasks/${id}`)
}

const createTask = data => {
    return http.post('/api/tasks', data)
}

const updateTask = (id, data) => {
    return http.put(`/api/tasks/${id}`, data)
}

const removeTask = id => {
    return http.delete(`/api/tasks/${id}`)
}


const getProjectsTasks = id => {
    return http.get(`/${id}/tasks`)
}
export default {
    getAllTasks,
    getProjectsTasks,
    getTaskById,
    createTask,
    updateTask,
    removeTask
}

//an crud service export that handles all crud functionality