function add(n1: number, n2: number) {
  console.log(typeof number1);

  // 단점 runtime에서만 체크할 수 있다. (TypeScript 사용시 아래와같은 방법은 사용하지 않는 것이 좋다.)
  // javascript는 number, string, boolean Type만 알 수 있다.
  // typescript를 통하여 런타임이아닌 코드작성중에 방어할 수 있다.
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!!");
  }
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
