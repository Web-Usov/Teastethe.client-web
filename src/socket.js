import  io from 'socket.io-client'
import {SERVER} from 'config.js'

const socket = io(SERVER,{
    autoConnect:false
})

export default socket