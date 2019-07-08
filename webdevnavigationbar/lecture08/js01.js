//console.log(1);
//console.log(2);

console.log(3);
//setTimeout(()=>{
  //  console.log("after 1 sec")
//},1)
//setTimeout(()=>{
  //  console.log("after 2 sec")
//},1)
var id=setInterval(()=>{
    console.log("every 1 sec")
},100)
setTimeout(()=>{
    console.log(4);
    clearInterval(id)
},5000)
