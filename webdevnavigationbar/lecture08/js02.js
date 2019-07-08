let para=document.getElementById("para");
var time=100;
//const id=setInterval(()=>{
  //  para.innerHTML(time);
    //time--;
//},50)
//setTimeout(()=>{
  //  clearInterval(id);
//})
var today=new Date();
para.innerHTML=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();