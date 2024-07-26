
function Human(name){
    this.name=name;
}

Human.prototype.speak=function(){
    console.log("She can speak "+this.name);
}

Human.prototype.introduction=function(){
    console.log("Hi All i am Human "+this.name);
}

function Student(name,college,courses){
    Human.call(this,name);
    this.college=college;
    this.courses=courses;
}

// Student.prototype=Object.create(Human.prototype);
// Student.prototype.constructor=Student;

Object.setPrototypeOf(Human,Student);

Student.prototype.introduction=function(){
    console.log("Hi all i am Student "+this.name);
}

Student.prototype.takeExams=function(){
    console.log("Taking exams ");
}

var s1=new Student("Shital","CS",["DS","AB","CD"]);

s1.speak();
s1.introduction();
s1.takeExams();


