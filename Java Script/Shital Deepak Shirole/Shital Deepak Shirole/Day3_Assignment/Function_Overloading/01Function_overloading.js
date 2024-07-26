var addition = {
    additionOfTwoNums(num1,num2){
        return num1+num2;
    },
    additionOfThreeNums(num1,num2,num3){
        return num1+num2+num3;
    },
    additionOfFourNums(num1,num2,num3,num4){
        return num1+num2+num3+num4;
    }
}

function operation(){
    if(arguments.length===2){
        return addition.additionOfTwoNums(arguments[0], arguments[1]);
    }else if(arguments.length===3){
        return addition.additionOfThreeNums(arguments[0],arguments[1],arguments[2]);
    }else if(arguments.length===4){
        return addition.additionOfFourNums(arguments[0],arguments[1],arguments[2],arguments[3]);
    }
}

console.log(operation(2,3));
console.log(operation(2,3,4));
console.log(operation(2,3,4,5));