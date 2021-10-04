enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]; // Element implicitly has an 'any' type because index expression is not of type 'number'.
  if (num <= LogLevel.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}

printImportant('ERROR', 'This is a message'); // Argument of type '"ERROR"' is not assignable to parameter of type '"toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"'.