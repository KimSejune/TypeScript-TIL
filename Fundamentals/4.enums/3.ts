enum E {
  X, Y, Z
}

function getX(obj: { X: number }) {
  return obj.X;
}

// enum E의 X는 숫자이기 때문에 정상 동작.
console.log(getX(E)); // 0