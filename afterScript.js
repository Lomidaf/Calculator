let allText="";
let buttons=document.querySelectorAll(".one");
console.log(buttons);
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        allText+=this.innerText;
        document.getElementById("displayRow").querySelector(".text").innerText=allText;
        console.log(this.innerText);
    })
}
document.querySelector("#equalButton").addEventListener("click",clickEqual);
document.querySelector("#delButton").addEventListener("click",del);
document.querySelector("#clearButton").addEventListener("click",clear);
document.querySelector("#dotButton").addEventListener("click",dot);
document.addEventListener("keydown",(e)=>{
    let type=["+","-","x","÷"];
    console.log(e);
   if(!isNaN(e.key) || type.indexOf(e.key)!=-1){
    allText+=e.key;
    document.getElementById("displayRow").querySelector(".text").innerText=allText;
    return;
   }
   if(e.key=="."){
       dot();
   }
});

function clickEqual(){
    console.log(allText);
    allText=equal(allText);
    document.getElementById("displayRow").querySelector(".text").innerText=allText;
}

function equal(text){
    if(text.lastIndexOf("+")!=-1){
        let index=text.lastIndexOf("+");
        if(index+1==text.length) return "ERROR";
        let firstHalf=equal(text.substring(0,index));
        let secondHalf=equal(text.substring(index+1));
        if(firstHalf=="ERROR" || secondHalf=="ERROR") return "ERROR";
        return (Number(firstHalf)+Number(secondHalf)).toFixed(5);
    }
    else if(text.lastIndexOf("-")!=-1){
        let index=text.lastIndexOf("-");
        if(index+1==text.length) return "ERROR";
        let firstHalf=equal(text.substring(0,index));
        let secondHalf=equal(text.substring(index+1));
        if(firstHalf=="ERROR" || secondHalf=="ERROR") return "ERROR";
        return (Number(firstHalf)-Number(secondHalf)).toFixed(5);
    }
    else if(text.lastIndexOf("x")!=-1){
        let index=text.lastIndexOf("x");
        if(index+1==text.length) return "ERROR";
        let firstHalf=equal(text.substring(0,index));
        let secondHalf=equal(text.substring(index+1));
        if(firstHalf=="ERROR" || secondHalf=="ERROR") return "ERROR";
        return (firstHalf*secondHalf).toFixed(5);
    }
    else if(text.lastIndexOf("÷")!=-1){
        let index=text.lastIndexOf("÷");
        if(index+1==text.length) return "ERROR";
        let firstHalf=equal(text.substring(0,index));
        let secondHalf=equal(text.substring(index+1));
        if(secondHalf==0) return "ERROR";
        if(firstHalf=="ERROR" || secondHalf=="ERROR") return "ERROR";
        return (firstHalf/secondHalf).toFixed(5);
    }
    else if(isNaN(text)){
        return "ERROR";
    }
    return text;
}

function dot(){
    let lastDot=allText.lastIndexOf(".");
    let type=["+","-","x","÷"];
    let lastType=-1;
    for(let i=0;i<type.length;i++){
        if(lastType<allText.lastIndexOf(type[i])){
            lastType=allText.lastIndexOf(type[i]);
        }
    }
    if(lastDot>lastType) return;
    allText+=".";
    document.getElementById("displayRow").querySelector(".text").innerText=allText;
}

function clear(){
    allText="";
    document.getElementById("displayRow").querySelector(".text").innerText=allText;
}

function del(){
    allText=allText.slice(0,-1);
    document.getElementById("displayRow").querySelector(".text").innerText=allText;
}

