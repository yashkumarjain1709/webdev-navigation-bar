const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')
// const handlebars=require('handlebars')
app.set('viewengine','hbs')
hbs.registerPartials(path.join(__dirname,'/'))
app.get('/',(req,res)=>{
    res.render('index.hbs',{
        name:"yash",
        age:"19"

    })
})
app.listen(3000,function(){
console.log("Running on 3000 ")

})