## Class

### readonly

class 속성에 `readonly` 키워드를 사용하면 아래와 같이 접근만 가능합니다.

```ts
class Developer {
  readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let john = new Developer('John');
console.log(john); // Developer { name: 'John' }
john.name = 'sejune'; // Cannot assign to 'name' because it is a read-only property.
```

readOnly를 사용하면 constructor()함수에 초기 값 설정 로직을 넣어줘야하는데 인자에 readonly 키워드를 추가해서 코드를 줄일 수 있다.

```ts
class Developer2 {
  constructor(readonly name: string) {
  }
}

let sejune = new Developer2('sejune');
console.log(sejune); // Developer2 { name: 'sejune' }
```


### Accessor

타입스크립트는 객체의 특정 속성의 접근과 할당에 대해 제어할 수 있습니다.

```ts
class Developer3 {
  private name: string;

  // constructor를 사용하지 않기위해 tsconfig.js의 "strictPropertyInitialization": false, 로 바꾼다.
  get getName(): string {
    return this.name;
  }

  set setName(newValue: string) {
    if (newValue?.length > 5) {
      throw new Error("이름이 너무 길다.");
    }
    this.name = newValue;
  }
}

const sejune2 = new Developer3();
// sejune2.setName = 'Sejune';
sejune2.setName = 'Sj';
console.log(sejune2) // Developer3 { name: 'Sj' }
```

> get만 선언하고 set을 선언하지 않는 경우에는 자동으로 readonly로 인식됩니다.


### Abstract Class

추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드의 모양을 정의한다.

```ts
abstract class Developer4 {
  abstract coding(): void;
  setting(): void {
    console.log('env setting');
  }
}

class backEndDeveloper extends Developer4 {
  coding(): void { 
     // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log('develop server');
  }

  structure(): void {
    console.log('make structure');
  }
}

// const dev = new Developer4(); // 추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511)
const sejune3 = new backEndDeveloper();
sejune3.setting(); // env setting
sejune3.structure(); // make structure
sejune3.coding(); // develop server

```




