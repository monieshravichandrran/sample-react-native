import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import Reducers from "./Reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store =createStore(
    Reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
)