import { usermessages } from "../reduxmessages"


export function signup(state = {}, action) {
    switch(action.type) {
        case usermessages.signup_request:
            return { signing_up: true};
            case usermessages.signup_success:
                return {};
                case usermessages.signup_failure:
                    return {};
                    default:
                        return state
    }
}