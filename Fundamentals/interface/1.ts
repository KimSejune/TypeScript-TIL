let person = { name: 'Sejune', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age);
}

logAge(person);