import {userConst} from '../const'

export const setSocket = (socket) => ({
    type:userConst.SET_SOCKET,
    payload:{
        socket
    }
})

export const login = (data) => ({
    type:userConst.LOGIN,
    payload:data
})
export const logout = () =>({
    type:userConst.LOGOUT,
})