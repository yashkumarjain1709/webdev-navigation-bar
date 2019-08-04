const express=require('express')
const app=express()
let todo=[];
app.use(express.urlencoded({extended:true}));
app.get('/todos',(req,res)=>{
    res.send(todo);
    next()
})//for getting the list
app.post('/todos',(req,res)=>{
    const {
    name,striked=false}=req.body;
    const newtodo={
        id:todo.length+1,
        name,striked:striked=="true"
    };
        todo.push(newtodo);
      res.send(newtodo)
});//for add
app.delete('/todos:id',(req,res)=>{
    const tododelete=todos.find(todo=>todo.id==req.params.id)
    if(!tododelete.striked==true){
        return res.sendStatus(403)
    }
    todos=todos.filter(todo=>todo.id!=tododelete.id)
    res.sendStatus(200)
    
})//for delete
app.patch('/todos:id',(req,res)=>{
    let todo=todos.find(t=>t.id==req.params.id)
    todo.striked=!!req.body.striked
    todo.name=req.body.name
    res.send(todo)
})
app.listen(3000)//for update
