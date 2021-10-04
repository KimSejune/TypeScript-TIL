enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
// 위와 같이 숫자형 Enum선헌시 초기 값을 주면 초기 값부터 차례로 1씩 증가한다.
console.log(Direction)
// Up: 1,
// Down: 2,
// Left: 3,
// Right: 4 

// 초기 값을 주지 않으면 0부터 1씩 증가한다.