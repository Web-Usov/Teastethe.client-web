import  io from 'socket.io-client'
import {SERVER} from './config'
const socket = io(SERVER)


export default socket