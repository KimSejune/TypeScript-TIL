class Developer {
  readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let john = new Developer('John');
console.log(john); // Developer { name: 'John' }
john.name = 'sejune'; // Cannot assign to 'name' because it is a read-only property.