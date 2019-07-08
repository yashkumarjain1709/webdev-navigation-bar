const promisfy =function(fn){
    return function(){
        return new Promise((resolve,reject)=>{
        fn(...arguments,(err,result)=>{
             if(err){
                 return reject(err)
             }
             return resolve(result)

        }
        )
    }
    )
    }
}