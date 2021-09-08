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