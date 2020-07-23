import { AlertMessages } from '../reduxmessages'

export const alertinfo = {
    success,
    error,
    clear,
}

function success(message) {
 return {type: AlertMessages.sucess, message}
}

function error(message) {
    return {type: AlertMessages.Error, message}

}

function clear(message) {
    return { type: AlertMessages.Clear, message}

}