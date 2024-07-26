function Person(){
    this.name="shital";
}

function Developer(){
    this.name="jay";
}

console.log(Person.prototype);
console.log(Developer.prototype);

var p1=new Person();
var d1=new Developer();

console.log(p1.__proto__);
console.log(d1.__proto__);

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(d1));