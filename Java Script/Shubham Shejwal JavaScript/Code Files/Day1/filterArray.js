let people = [
    { name: 'Shubham', age: 22 },
    { name: 'Abhishek', age: 17 },
    { name: 'Sumeet', age: 30 },
    { name: 'Atharva', age: 20 },
    { name: 'Omkar', age: 16 }
];

function filterByAgeGreaterThan18(arr) {
    return arr.filter(person => person.age > 18);
}
let filteredPeople = filterByAgeGreaterThan18(people);
console.log(filteredPeople);