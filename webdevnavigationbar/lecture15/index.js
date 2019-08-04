const express=require("express")
const server=express()
var http = require('http').createServer(server);
const io =require("socket.io")(http)

server.use(express.static(__dirname+"/public"))
io.on('connection',function(socket){
console.log("client connected")
//socket.on("chat",msg=>{
  //  console.log(msg)
//})
socket.emit("chat","hello from server")
})
server.get('/',(req,res)=>{
    res.send(200)
})
server.listen(3000,function(){
console.log("running on 3000")
})