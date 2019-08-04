const socket=io()
//socket.emit('chat',"hello")
socket.on("chat",msg=>{
    console.log(msg);
})