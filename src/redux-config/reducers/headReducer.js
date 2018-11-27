import {headConst} from '../const'

const defaultState = {
    title: "MyTeas",
    subTitle: ""
}

export default (state = defaultState, action = {}) => {
    switch(action.type){
        case headConst.SET_SUBTITLE:{
            const result = Object.assign(
                {},
                state,
                {
                    subTitle:action.payload.subTitle,
                }
            )  
            return result
        }
        default: return state
    }
}