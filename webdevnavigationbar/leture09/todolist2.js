let state=[];
const render =(state)=>{
    return state.reduce((acc,todo)=>{
        const classstring=todo.striked?'class=strike':""
        return acc +`<li ${classstring}>${todo.title}</li>`
    })
}
const paint=function(){
    html=render(state)
document.getElementById('list').innerHTML=html;
}
document.getElementById("add").addEventListener 