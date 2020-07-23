import { createStore, applyMiddleware} from "redux"
import Middleware from "redux-thunk"
import { createLogger } from 'redux-logger'
import rootreducer from '../reducers'


const logmiddleware = createLogger()

export const store = createStore(
    rootreducer,
    applyMiddleware(Middleware, logmiddleware)
)