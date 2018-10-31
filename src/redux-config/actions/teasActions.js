import {teasConst} from '../const'

export const setList = (data) => (
    {
        type:teasConst.SET_LIST,
        payload:data
    }
)
export const addTea = (tea) =>(
    {
        type:teasConst.ADD_ITEM,
        payload:tea
    }
)