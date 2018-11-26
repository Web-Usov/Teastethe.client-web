import {headConst} from '../const'

export const setSubTitle = (subTitle) => ({
    type:headConst.SET_SUBTITLE,
    payload:{
        subTitle
    }
})