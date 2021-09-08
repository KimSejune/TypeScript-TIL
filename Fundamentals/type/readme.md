## TypeScript 기본 타입

* Boolean
* Number
* String
* Object
* Array
* Tuple
* Enum
* Any
* Void
* Null
* Undefined
* Never

### String, Number, Boolean

```ts
let str: string = 'hi';
let num: number = 10;
let isBoolean: boolean = false;
```

### Array

```ts
// 배열
let arr: number[] = [1,2,3];
// 제네릭
let arr: Array<number> = [1,2,3];
```

### Tuple

Tuple이란? 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식.

```ts
let arr: [string, number] = ['str', 10];
```

정의하지 않은 타입, 인덱스로 접근시 오류 발생
```ts
arr[1].concat('?'); // Error
arr[10] = 'hi'; // Error
```

### Enum

Eunm이란? 특정 값(상수)들의 집합.

```ts
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
```

Eunm은 인덱스 번호로도 접근할 수 있다.
```ts
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers[0];
```

Enum의 인덱스를 사용자 편의로 변경하여 사용할 수 있다.
```ts
enum Avengers { Capt = 2, IronMan, Thor }
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor
```


### Any

모든 타입에 대해서 허용한다는 의미를 가진다.
```ts
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];
```

### Void

변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입입니다.

```ts
let unuseful: void = undefined;
function nofuse(): void {
  console.log('sth);
}
```

### Never

함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입입니다.

```ts
// 이 함수는 절대 함수의 끝까지 실행되지 않는다.
function neverEnd(): never {
  while (true) {

  }
}
```
