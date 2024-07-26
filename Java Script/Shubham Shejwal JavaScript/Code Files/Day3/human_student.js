function Human(name) {
    this.name = name;
  }
  
  Human.prototype.speak = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  Human.prototype.introduction = function() {
    console.log(`I am a human named ${this.name}`);
  };
  
  function Student(name, college, courses) {
    Human.call(this, name); // Call the Human constructor
    this.college = college;
    this.courses = courses;
  }
  
  Student.prototype = Object.create(Human.prototype);
  
  Object.setPrototypeOf(Student.prototype, Student);
  
  Student.prototype.introduction = function() {
    console.log(`I am a student named ${this.name} from ${this.college}`);
  };
  
  Student.prototype.takeExams = function() {
    console.log(`I am taking exams for ${this.courses.join(', ')}`);
  };
  
  const student = new Student('John Doe', 'MIT', ['Math', 'Science', 'English']);
  
  student.speak(); // Output: Hello, my name is John Doe
  student.introduction(); // Output: I am a student named John Doe from MIT
  student.takeExams(); // Output: I am taking exams for Math, Science, English