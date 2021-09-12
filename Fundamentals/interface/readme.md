## Interface
인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다.
* 객체의 스펙(속성과 속성의 타입)
* 함수의 파라미터
* 함수의 스펙(파라미터, 반환 타입 등)
* 배열과 객체를 접근하는 방식
* 클래스

```ts
let person = { name: 'Sejune', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age);
}

logAge(person);
```
아래는 위의 함수의 param에 interface를 적용한 모습이다.

```ts
interface personAge {
  age: number;
}
// obj의 personAge Interface type을 받는다.
function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Kim', age: 28 };
logAge(person);
```
* `logAge()`의 인자는 `personAge` 라는 `타입을` 가져야한다.
* 인터페이스에 정의된 `속성, 타입의 조건만 만족`한다면 객체의 속성 갯수가 더 많아도 상관 없다는 의미입니다. 
* 인터페이스에 선언된 속성 순서를 지키지 않아도 됩니다.

### 옵션 속성

? 를 추가하여 옵셔널을 추가할 수 있다.

```ts
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBear = {
  name: 'Cass'
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
}
brewBeer(myBear);
```

hop속성이 없어도 옵셔널이기때문에 오류가 나지 않고 잘 작동한다.

### 옵션 속성의 장점

* param을 선택적으로 적용이 가능하다.
* Interface에 정의되어 있지 않은 속성에 대해서 인지시켜줄 수 있다.
  * 오탈자나, 정의되어 있지않은 속성에 대해서 오류를 표시한다.


## 읽기 전용 속성

읽기 전용 속성은 interface로 객체를 처음 생성할 때만 값을 할당하고 `그 이후에는 변경할 수 없는 속성`이다.

```ts
interface CraftBeer2 {
  readonly brand: string;
}

let myBeer2: CraftBeer2 = {
  brand: 'hawaii beer'
};

myBeer2.brand = 'Korean beeer'; // 읽기 전용 속성이므로 'brand'에 할당할 수 없습니다.ts(2540)

```

## 읽기 전용 배열

배열 선언시 `ReadonlyArray<T>`를사용하여 생성할 수 있다.

```ts
let arr2: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // 'splice' 속성이 'readonly number[]' 형식에 없습니다. 'slice'을(를) 사용하시겠습니까?ts(2551)
arr.push(4); // 'readonly number[]' 형식에 'push' 속성이 없습니다.ts(2339)
arr[0] = 100; // 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)
arr2 = [10, 20, 30]; // 재할당이 가능하다 

```

## 객체 선언과 관련된 타입 체킹

```ts
interface CraftBeer3 {
  brand?: string;
}

function brewBeer3(beer: CraftBeer3) {
  console.log(beer.brand)
}

// brewBeer3({ brandon: 'what'}); 
// '{ brandon: string; }' 형식의 인수는 'CraftBeer3' 형식의 매개 변수에 할당될 수 없습니다.
//   개체 리터럴은 알려진 속성만 지정할 수 있지만 'CraftBeer3' 형식에 'brandon'이(가) 없습니다. 

// 만약 이런 타입 추론을 무시하고 싶다면 아래와 같이 선언합니다.
let myBeer3 = { brandon: 'what'};
brewBeer3(myBeer3 as CraftBeer3);
```

## 함수 타입

인터페이스는 함수의 타입을 정의할 때에도 사용할 수 있다.
```ts
interface login {
  (username: string, password: string): boolean;
}

// 함수의 인자의 타입과 반환 값의 타입을 정합니다.
let loginUser: login = function(id: string, pw: string) {
  console.log('로그인 했습니다.');
  return true;
}

```

## 클래스 타입

클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있다.
```ts
interface CraftBeer4 {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer4 implements CraftBeer4 {
  beerName: string = 'Cass';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor(){}
}
```

## 인터페이스 extends

```ts
interface Person {
  name: string;
}

interface Drinker {
  drink: string;
}

interface Develpoer extends Person, Drinker {
  skill: string;
}

let fe: Develpoer = {
  name: 'sejune',
  skill: 'TypeScript',
  drink: 'Cass',
};


let fe2: Develpoer = {
  name: 'sejune',
  skill: 'TypeScript',
  drink: 'Hite',
}
```

## 하이브리드 타입

자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스 역시 여러 가지 타입을 조합하여 만들 수 있다.

```ts
interface CraftBeer5 {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer5(): CraftBeer5 {
  let my = (function(beer:string) {}) as CraftBeer5;
  my.brand = 'Cass';
  my.brew = function() {
    console.log(`${my.brand} drink!`);
  }
  console.dir(my, 2) // { [Function: my] brand: 'Cass', brew: [Function] }
  return my;
}

let brewedBeer = myBeer5();
brewedBeer('My First Beer');
brewedBeer.brand = 'Test Craft';
brewedBeer.brew(); // Test Craft drink!
```