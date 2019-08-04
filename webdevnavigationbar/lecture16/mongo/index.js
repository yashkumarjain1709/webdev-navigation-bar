const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect().then(()=>{
    const db=client.db("testdb")
    const users=db.collection("users")
    console.log("connected")
}).catch(err=>{
    console.log("Error Detected")
})