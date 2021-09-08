## TypeScript Function

### 함수의 기본적인 타입 선언

```js
function sum(a, b) {
  return a + b;
}
```

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

<b>매개변수와 반환 값</b>에 `타입을 추가`한다.

### Parameter

Typescript에서는 `parameter를 모두 필수 값으로 간주`한다.

```ts
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // 2개의 인수가 필요한데 3개를 가져왔습니다
sum(10); // 2개의 인수가 필요한데 1개를 가져왔습니다.
```

이러한 특성을 살리고 싶다면 ?을 사용하여 처리한다.
```ts
function sum(a: number, b?: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // 2개의 인수가 필요한데 3개를 가져왔습니다
sum(10); // 10
```

### REST 문법이 적용된 매개변수

parameter에 Rest문법을 통하여 정해지지 않은 여러개의 값을 받아 올 수 있다.

```ts
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = nums.reduce((pre: number, cur: number) => pre + cur, 0);
  return a + totalOfNums;
  
}

console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30)); // 60
console.log(sum(10)); // 10
```

### this

TypeScript에서는 this가 잘못 사용되었을 때 감지할 수 있다.

```ts
function name(this: 타입) {
  // ...
}
```

```ts
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function(this: Vue) {
    console.log('this :', this) // this : { el: '#app', count: 10, init: [Function: init] }
    return () => {
      // 화살표 함수는 함수 자체의 this바인딩을 갖지 않는다. 
      // 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
      console.log('this :', this) // this : { el: '#app', count: 10, init: [Function: init] }
      return this.count;
    }
  }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10
```

### 콜백에서의 this

콜백으로 함수가 전달되었을 때의 this를 구분해줘야 할 때 강제할 수 있다.

```ts
interface UIElement {
  // 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요가 없다는 의미입니다.
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClick(this: Handler, e: Event) {
        // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생합니다.
        this.info = e.message;
    }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick); // error!
```