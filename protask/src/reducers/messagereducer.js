import { AlertMessages } from '../reduxmessages'

export function alert(state = {}, action) {
    switch(action.type) {
        case AlertMessages.sucess:
            return {
                type: 'alert-sucess',
                message: action.message,
            }
            case AlertMessages.Error:
                return {
                    type: 'alert-danger',
                    message: action.message
                }
                case AlertMessages.Clear:
                    return {}
                    default:
                        return state
    }
}