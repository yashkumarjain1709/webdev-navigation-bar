const express=require('express')
const app=express()

i=0;
app.use((req,res,next)=>{
    console.log("in middleware")
    if(i%2==0){
        next()
    }
    i++;
})
app.get('/',(req,res)=>{
    res.send("hi")
})
app.listen(3000)
