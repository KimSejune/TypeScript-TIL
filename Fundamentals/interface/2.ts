interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Kim', age: 28 };
logAge(person);