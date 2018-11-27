import userReducer from './userReducer'
import teasReducer from './teasReducer'
import headReducer from './headReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    user:userReducer,
    teas:teasReducer,
    head:headReducer
})