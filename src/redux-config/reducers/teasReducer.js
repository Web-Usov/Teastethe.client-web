import {teasConst} from '../const'

const defaultState = {
    list:{},
    listId:[]
}

export default (state = defaultState, action ={}) => {
    switch(action.type){
        case teasConst.SET_LIST:{
            const result = {
                list:action.payload.teas,
                listId:action.payload.teasId
            }        
            return result
        }
        case teasConst.ADD_ITEM:{
            const result = {
                list:Object.assign({},state.list),
                listId:[...state.listId,action.payload.id]
            }
            result.list[action.payload.id] = action.payload
            return result
        }
        default: return state
    }
}