module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    taskToBody,
    tagsToBody
}

function intToBoolean(int) {
    return int === 1 ? true : false
}

function booleanToint(bool) {
    return bool === true ? 1 : 0;
}

function projectToBody(project) {
    const result = {
        ...project,
    }

    if(project.tasks) {
        result.tasks = project.tasks.map(tasks => ({
            ...tasks,
        }))
    }
    return result
}

function taskToBody(task) {
    return {
        ...task,
    }
}

function tagsToBody(tag) {
    return {
        ...tag
    }
}
