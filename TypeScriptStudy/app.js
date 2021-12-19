function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
function combine(input1, input2, resultConversation) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversation === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversation === "as-number") {
    //   return parseFloat(result);
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, "as-number");
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Kim", "as-text");
