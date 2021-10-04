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