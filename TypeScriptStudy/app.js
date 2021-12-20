var userInput; // 사용자가 어떤 값을 입력할지 몰라서 unknown이다.
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("Before");
var result = generateError("An error occurred!", 500);
console.log("After");
console.log(result);
