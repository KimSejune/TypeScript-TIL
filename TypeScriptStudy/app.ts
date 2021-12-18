// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "Maximilian",
  age: 30,
};

// 없는 property를 찾으려고하면 오류가난다.
// person: object로 설정하면 person의 구체적 property를 알지 못하여 존재하는 property도 알아내지 못한다.
console.log(person.name);

// 아래와 같이 타입이 보여진다.
// const person: {
//   name: string;
//   age: number;
// }
