// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "cooking"],
  role: [2, "author"],
};

// person.role.push("admin");

// person.role = [1, "test", 3];

console.log(person.role);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let favoriteAcitivities: string[] = ["Sports"];
