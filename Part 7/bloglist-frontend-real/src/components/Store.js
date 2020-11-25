import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
    notifications: notificationReducer,
})

const Store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default Store