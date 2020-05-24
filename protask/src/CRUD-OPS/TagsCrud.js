import http from "./http-common"

const getAllTags = () => {
    return http.get('/api/tags')
}

const getTagById = id => {
    return http.get(`/api/tags/${id}`)
}

const createTag = data => {
    return http.post('/api/tags', data)
}

const updateTag = (id, data) => {
    return http.put(`/api/tags/${id}`, data)
}

const removeTag = id => {
    return http.delete(`/api/tags/${id}`)
}

export default {
    getAllTags,
    getTagById,
    createTag,
    updateTag,
    removeTag
}

//an crud service export that handles all crud functionality