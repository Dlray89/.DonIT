import http from "./http-common"


const getJournals = () => {
    return http.get('/api/journals')
}

const getJournalById = id => {
    return http.get(`/api/journals/${id}`)
}

const createJournal = data => {
    return http.post(`/api/journals`, data)
}

const updateJournal = (id, data) => {
    return http.put(`/api/journals/${id}`, data)
}

const deleteJournal = id => {
    return http.delete(`/api/journals/${id}`)
}

export default {
    getJournals,
    getJournalById,
    createJournal,
    updateJournal,
    deleteJournal,

}