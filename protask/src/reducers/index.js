import { combineReducers } from 'redux'
import { authentication } from "./authreducers"
import { signup } from './signupreducer'
import { users } from './userreducer'
import { alert } from './messagereducer'


const rootReducter = combineReducers({
    authentication,
    signup,
    users,
    alert
})

export default rootReducter