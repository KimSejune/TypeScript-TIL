function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3};

getProperty(obj, "a");
getProperty(obj, "z"); // '"z"' 형식의 인수는 '"a" | "b" | "c"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
