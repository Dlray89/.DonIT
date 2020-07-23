import { usermessages } from "../reduxmessages"


export function users(state = {}, action) {
    switch(action.type) {
        case usermessages.getALL_request:
            return {
                loading: true
            }
            case usermessages.getALL_success:
                return {
                    username: action.user
                }
                case usermessages.delete_request:
                    return {
                        ...state,
                        username: state.username.map(user => 
                            user.id === action.id ? {...user, deleting: true} : user)
                    }
                    case usermessages.delete_success:
                        return {
                            username: state.username.filter(user => user.id !== action.id)
                        }
                        case usermessages.delete_failure:
                            return {
                                ...state,
                                username: state.username.map(user => {
                                    if(user.id === action.id) {
                                        const { deleting, ...usercopy } = user
                                        return { ...usercopy, deleteerror: action.error}
                                    }
                                    return user
                                })
                            }

                            default:
                                return state
    }
}