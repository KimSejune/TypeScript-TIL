## Enums

Enums은 특정 값들의 집합을 의미하는 자료형이다.

### 숫자형 Enums

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
// 위와 같이 숫자형 Enum선헌시 초기 값을 주면 초기 값부터 차례로 1씩 증가한다.
console.log(Direction)
// Up: 1,
// Down: 2,
// Left: 3,
// Right: 4 

// 초기 값을 주지 않으면 0부터 1씩 증가한다.
```

### 숫자형 Enum 사용하기

```ts
enum enumResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: enumResponse): void {
  console.log(`${recipient}, ${message}`); // Test SJ, 1
}

respond('Test SJ', enumResponse.Yes);
```


### 문자형 Enum

[런타임에서 문자형 Enum VS 숫자형 Enum 차이](https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-runtime)  

문자형 Enum은 값 전부다 특정 문자 또는 다른 Enum값으로 초기화 해야한다.

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

### 복합 Enums

문자와 숫자를 혼합하여 생성할 수 있지만 권고하지 않는다.

```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

### 런타임 시점에서의 Enum 특징

Enum은 런타임시에 실제 객체 형태로 존재한다.  
값이 미할당시 0부터 1씩 증가해서 할당된다.
```ts
enum E {
  X, Y, Z
}

function getX(obj: { X: number }) {
  return obj.X;
}

// enum E의 X는 숫자이기 때문에 정상 동작.
console.log(getX(E)); // 0
```


### 컴파일 시점에서의 Enum 특징

Enum이 런타임 시점에서는 실제 객체지만 `keyof`를 사용할 때 주의해야한다.  
일반적으로 `keyof` 대신 `keyof typeof`를 사용하세요.  

keyof를 사용할 경우 아래와 같은 오류가 발생한다.

```ts
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
```

keyof typeof를 사용하면 해결할 수 있다.
```ts
enum LogLevel2 {
  ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings2 = keyof typeof LogLevel2;

function printImportant(key: LogLevelStrings2, message: string) {
  const num = LogLevel2[key];
  if (num <= LogLevel2.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}

printImportant('ERROR', 'This is a message'); 
// Log level key is:  ERROR
// Log level value is:  0
// Log level message is:  This is a message
```


### keyof Type

keyof 연산자는 Object type을 가져와 키의 문자열 또는 숫자 리터럴 통합을 생성한다.

```ts
type Point = { x: number; y: number };
type P = keyof Point;
console.log(P)
```