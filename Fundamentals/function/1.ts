function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 20)); // 30
sum(10, 20, 30); // 2개의 인수가 필요한데 3개를 가져왔습니다
sum(10); // 2개의 인수가 필요한데 1개를 가져왔습니다.