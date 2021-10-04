enum LogLevel2 {
  ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings2 = keyof typeof LogLevel2;

function printImportant2(key: LogLevelStrings2, message: string) {
  const num = LogLevel2[key];
  if (num <= LogLevel2.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}

printImportant2('ERROR', 'This is a message'); 
// Log level key is:  ERROR
// Log level value is:  0
// Log level message is:  This is a message