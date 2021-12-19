// const person: {
//   name: string;
//   age: number;
// }
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "cooking"],
    role: [2, "author"]
};
person.role.push("admin");
// person.role[1] = 10;
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var favoriteAcitivities = ["Sports"];
