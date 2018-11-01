import  io from 'socket.io-client'
const port = "3100"
const uri = 'http://104.211.35.221:'+port
// const uri = 'http://192.168.56.1:'+port
const socket = io(uri)

export default socket