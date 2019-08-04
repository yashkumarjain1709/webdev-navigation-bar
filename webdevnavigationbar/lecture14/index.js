const Sequelize=require("sequelize")
const express=require('express')
const app=express()
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./db.sqlite'
});
const Bands=sequelize.define('bands',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,

        allowNull:false
    },
    striked:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allownull:false

    }

})
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    const filter =req.query||{}
    Bands.findAll({
        where:filter
    }).then(bands=>{
        res.json(bands)
    })
})
app.post('/',(req,res)=>{
    Bands.create({
        title:req.body.title,

    }).then(band=>{
        res.json(band)
    })
})
app.patch('/:id',(req,res)=>{
 Bands.update(req.body,{where:{
     id:req.params.id
}.then(()=>{
    res.sendStatus(200);
})
})   
})
Bands.sync().then(()=>{
    console.log("created bands")
    app.listen(3000)
})
//sequelize.authenticate().then(()=>{
  //  console.log("connected")
//}).catch(err=>{
  //  console.log("not connected")
//})