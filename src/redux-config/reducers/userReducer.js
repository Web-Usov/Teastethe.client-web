import {userConst} from '../const/'

const defaultState = {
    id:Math.random(),
    name:'',
    auth:false,
    socket:null
}

export default (state = defaultState, action = {}) => {
    switch(action.type){
        case userConst.LOGIN:{
            const result = Object.assign(
                {},
                state,
                {
                    name:action.payload.name,
                    auth:true
                }
            )  
            return result
        }
        case userConst.LOGOUT:{
            const result = Object.assign(
                {},
                state,
                {
                    name:'',
                    auth:false
                }
            )  
            return result
        }
        case userConst.SET_SOCKET:{
            const result =  Object.assign(
                state,
                {
                    socket:action.payload.socket,
                }
            )
            // console.log(result)                
            return result               
        }
        default: return state
    }
}