function add(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversation: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultConversation === "as-number") {
  //   return parseFloat(result);
  // } else {
  //   return result.toString();
  // }
}
const combinedAges = combine(30, 26, "as-number");

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Kim", "as-text");
