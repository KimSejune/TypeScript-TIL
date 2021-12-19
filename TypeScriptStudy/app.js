// const person: {
//   name: string;
//   age: number;
// }
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "cooking"]
};
var favoriteAcitivities = ["Sports"];
// 없는 property를 찾으려고하면 오류가난다.
// person: object로 설정하면 person의 구체적 property를 알지 못하여 존재하는 property도 알아내지 못한다.
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// 아래와 같이 타입이 보여진다.
// const person: {
//   name: string;
//   age: number;
// }
