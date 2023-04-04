const increment =()=>{
    
    const number= Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML=number+1;
    
    
}
const decrement =()=>{
    const number= Number(document.getElementById("number").innerHTML)
    document.getElementById("number").innerHTML=number-1;
    
}
const neutral=()=>{
    document.getElementById('number').innerHTML=0;
}