const fs=require('fs')
fs.writeFile('../lecture08/file.txt',"1\n2\n3\n4\n5",(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("done");
})
var v1=[];
fs.readFile('../lecture08/file.txt',"utf-8",(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    v1=data.split('\n');
    var item=v1.reduce((acum,val)=>{
        return acum+ +val;
    },0)
    console.log(data);

    fs.writeFile('./file02.txt',item,(err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("done");
    });
});
