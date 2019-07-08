//const p1=new Promise((resolve,reject)=>{
  //  setTimeout(()=>{
    //    resolve("Some File Data")
   // },5000)
//})
//function resize(file){
  //  const promise=new Promise()
//}

function func(val,n){
    const promise=new Promise((resolve,reject)=>{
     setTimeout(()=>{
             resolve(val)
     },n)
    })
    return promise;
}
const generate=val=>n=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve(val)
    },n)
   })
   


func(5,10).then(console.log);

