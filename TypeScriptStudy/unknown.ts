let userInput: unknown; // 사용자가 어떤 값을 입력할지 몰라서 unknown이다.
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

console.log("Before");
const result = generateError("An error occurred!", 500);
console.log("After");
console.log(result);
