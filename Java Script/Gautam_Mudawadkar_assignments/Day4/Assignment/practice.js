var obj1={
    name:"AUdi",
    yaer:2021
}


var obj = {obj1}
// console.log(obj)

// var c ={...obj1}
// console.log(c)
// c.model="sdfsf";
// console.log(c)

var c= new Map();


c.set({obj1})

console.log(c);
// console.log(typeof(c))
// // c.insert({...obj1});

// console.log(c);

arr = [1,2,[3,4]]

res =[];

for (ele of arr){
    if(Array.isArray(ele)){
        res.push(...ele)
    }
    else{
        res.push(ele)
    }
}

console.log(res);