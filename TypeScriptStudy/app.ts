let userInput: unknown; // 사용자가 어떤 값을 입력할지 몰라서 unknown이다.
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
