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