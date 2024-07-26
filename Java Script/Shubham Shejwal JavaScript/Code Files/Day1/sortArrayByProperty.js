let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 },
    { name: 'Smith', age: 35 }
];

function sortByProperty(array, propertyName) {
    return array.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return -1;
        }
        if (a[propertyName] > b[propertyName]) {
            return 1;
        }
        return 0;
    });
}

// Sorting by name
sortByProperty(people, 'name');
console.log(people);

// Sorting by age
sortByProperty(people, 'age');
console.log(people);