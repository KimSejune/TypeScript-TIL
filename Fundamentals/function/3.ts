function sum(a: number, ...nums: number[]): number {
  const totalOfNums = nums.reduce((pre: number, cur: number) => pre + cur, 0);
  return a + totalOfNums;
  
}

console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30)); // 60
console.log(sum(10)); // 10