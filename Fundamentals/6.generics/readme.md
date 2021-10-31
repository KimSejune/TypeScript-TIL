## Generics

재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다.
특히 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

### Generics 이란?

<b>타입을 마치 함수의 파라미터처럼 사용하는 것을 의미합니다.</b>

```js
function getText(text) {
  return text;
}

getText('hi'); // 'hi'
getText(10); // 10
getText(true); // true
```
위의 코드를 제네릭을 살펴보자면.

```ts
function getText<T>(text: T): T {
  return text;
}

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);
```

### Generics을 사용하는 이유

```ts
function logText(text: any): any {
  // any 타입은 타입 검사를 하지 않는다.
  return text;
}
```

위의 코드처럼 타입을 any로 처리해도 동작에 문제가 생기지는 않지만,  
<b>함수의 인자로 어떤 타입이 들어갔고 어떤 값이 반환되는지 알 수 없다.</b>


```ts
function logText<T>(text: T): T {
  return text;
}

// 2가지 방법으로 호출가능하다.
const text = logText<string>('Hello');
const text2 = logText('Hello');
```

### Generics 타입 변수

```ts
function logText<T>(text: T): T {
  console.log(text.length) // 'T' 형식에 'length' 속성이 없습니다.ts(2339)
  return text;
}


const text = logText<string>('Hello');
const text2 = logText('Hello');

```
Parameter인 text가 어떤 타입으로 들어올지 모르니 length를 허용하지 않습니다. (number type은 length가 없다.)

위의 상황을 해결하기 위해서는 text를 `T[]` OR `Array<T>`로 변경해줘야한다.
이런 방식으로 Generics을 사용하면 꽤 유연한 방식으로 함수의 타입을 정의해줄 수 있습니다.


```ts
function logText<T>(text: T[]): T[] {
  console.log(text.length) // 'T' 형식에 'length' 속성이 없습니다.ts(2339)
  return text;
}

// OR

function logText<T>(text: Array<T>): Array<T> {
  console.log(text.length) // 'T' 형식에 'length' 속성이 없습니다.ts(2339)
  return text;
}
```


### Generics Type

Generics interface에 대해 알아보자.

```ts
function logText<T>(text: T): T {
  return text;
}

let str: <T>(text: T) => T = logText;
let str2: {<T>(text: T): T} = logText;
```

위와 같은 변형 방식으로 Generics Interface 코드를 다음과 같이 작성할 수 있다.

```ts
interface GenericLogTextFn {
  <T>(text: T): T;
}

function logText<T>(text: T): T {
  return text;
}

let myString: GenericLogTextFn = logText;
```

### Generics Class

```ts
class GenericMath<T> {
  pi: T;
  sun: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
```

Generics Class 선언시 클래스 이름 오른쪽에 `<T>`를 붙여줍니다. 그리고 인스턴스를 생성할 때 타입을 지정해줘야한다.


### Generics 제약 조건

앞에서 length 오류가 났던 것을 특정 속성 정도를 허용하는 방법이 있다.

```ts
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise >(text: T): T {
  console.log(text.length);
  return text;
}

logText(10); // 'number' 형식의 인수는 'LengthWise' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
logText({ length: 0, value: 'hi'});
```

### 객체의 속성을 제약하는 방법

객체의 값이 속하는지 Generics 제약 조건으로 확인가능하다.

```ts
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3};

getProperty(obj, "a");
getProperty(obj, "z"); // '"z"' 형식의 인수는 '"a" | "b" | "c"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

```

제네릭을 선언할 때 `<O extends keyof T>` 부분에서 첫 번째 인자로 받는 객체에 없는 속성들은 접근할 수 없게끔 제한하였습니다.