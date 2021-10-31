interface GenericLogTextFn<T> {
  <T>(text: T): T;
}

function logText<T>(text: T): T {
  return text;
}

// let myString: GenericLogTextFn = logText;
let myString2: GenericLogTextFn<string> = logText;