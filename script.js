

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    if(operator=="+"){
        return add(a,b);
    }
    else if(operator=="-"){
        return subtract(a,b);
    }
    else if(operator=="*"){
        return multiply(a,b);
    }
    else if(operator=="/"){
        return divide(a,b);
    }
    else if(a="" || operator==""){
        if(b="") return a;
        else return "ERR";
    }
    else{
        console.log("Something unexpected happen");
        return "ERR";
    }
    return "ERR";
}


