interface LengthWise {
  length: number;
}

function logText2<T extends LengthWise >(text: T): T {
  console.log(text.length);
  return text;
}

logText2(10); // 'number' 형식의 인수는 'LengthWise' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
logText2({ length: 0, value: 'hi'});