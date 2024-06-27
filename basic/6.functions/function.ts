// void type
// Function type & callback
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log('Result :' + num);
}

function addAndHandle(
  num1: number,
  num2: number,
  cb: (num: number) => void
): void {
  const result = num1 + num2;
  cb(result);
}

let combineValues: (num1: number, num2: number) => number;
combineValues = add;

printResult(add(6, 7));
console.log(printResult(add(6, 7)));
printResult(combineValues(5, 5));

addAndHandle(10, 40, (result) => {
  console.log(result);
});
