import {teasConst} from '../const'

const defaultState = {
    list:[],
}

export default (state = defaultState, action ={}) => {
    switch(action.type){
        case teasConst.SET_LIST:{
            const result = {
                list:action.payload,
            }        
            return result
        }
        case teasConst.ADD_ITEM:{
            const result = {
                list:[...state.list,action.payload]
            }
            return result
        }
        default: return state
    }
}