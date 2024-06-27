const add = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
  //   throw new Error('Incorrect input!!')
  // }
  const result = number1 + number2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPharse = 'Result is : ';

const addResult = add(number1, number2, printResult, resultPharse);
