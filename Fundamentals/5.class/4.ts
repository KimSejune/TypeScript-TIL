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
