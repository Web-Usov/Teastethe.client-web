import {teasConst} from '../const'

export const setList = (teas) => (
    {
        type:teasConst.SET_LIST,
        payload:teas
    }
)
export const addTea = (tea) =>(
    {
        type:teasConst.ADD_ITEM,
        payload:tea
    }
)