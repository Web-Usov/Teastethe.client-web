import userReducer from './userReducer'
import teasReducers from './teasReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    user:userReducer,
    teas:teasReducers
})