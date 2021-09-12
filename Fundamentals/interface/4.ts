interface CraftBeer2 {
  readonly brand: string;
}

let myBeer2: CraftBeer2 = {
  brand: 'hawaii beer'
};

myBeer2.brand = 'Korean beeer'; // 읽기 전용 속성이므로 'brand'에 할당할 수 없습니다.ts(2540)
