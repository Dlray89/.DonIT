import { usermessages } from "../reduxmessages"


const user = JSON.parse(localStorage.getItem('user'))
const initState = user ? { loggedin: true, user} : {}


export function authentication(state = initState, action) {
    switch(action.type) {
        case usermessages.login_reques:
            return {
                loggedin: true,
                user: action.user
            }
            case usermessages.login_success:
                return {
                    loggedin: true,
                    user: action.user
                }
            case usermessages.signup_failure:
                return {
                    loggedin: false,
                    user: action.user
                }
                case usermessages.logout:
                    return {
                        loggedin: false,
                        user: action.user
                    }
                    default:
                        return state
    }
}