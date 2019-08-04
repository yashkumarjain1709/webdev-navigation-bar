const express=require('express')
const app=express()
app.use('/',(req,res,next)=>{
    console.log("hello");
    next()
})
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(3000)