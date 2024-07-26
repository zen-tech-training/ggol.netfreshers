var addition = {
    functionWithTwoNums(num1,num2){
        return num1+num2;
    },
    FunctionWithOneNumOneString(num1,num2){
        return num1+num2;
    },
    functionWithBothString(num1,num2){
        return num1+num2;
    },
    FunctionWithTreeNums(num1,num2,num3){
        return num1+num2+num3;
    },
    DefaulOne(){
        return "This is default one";
    }
}

function operation(){
    if(arguments.length===2 && typeof(arguments[0])===number && typeof(arguments[1])===number){
        return addition.additionOfTwoNums(arguments[0], arguments[1]);
    }else if(arguments.length===2 && typeof(arguments[0])===string && typeof(arguments[1])===string){
        return addition.functionWithBothString(arguments[0],arguments[1],arguments[2]);
    }else if(arguments.length===2 && typeof(arguments[0])===string && typeof(arguments[1])===number){
        return addition.FunctionWithOneNumOneString(arguments[0],arguments[1],arguments[2],arguments[3]);
    }else if(arguments.length===3 && typeof(arguments[0])===number && typeof(arguments[1])===number && typeof(arguments[2])===number){
        return addition.FunctionWithTreeNums(arguments[0],arguments[1],arguments[2]); 
    }else{
        return addition.DefaulOne();
    }
}
console.log(typeof(2));
console.log(typeof("shshh"));

console.log(operation(2,2));
console.log(operation("abc","gfgf"));
console.log(operation("shhs",19));
console.log(operation(4,5,6));
console.log(operation("dhdhf","dbfh","dfb"));