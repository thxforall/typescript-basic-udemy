var add = function (num1, num2, showResult, phrase) {
    // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    //   throw new Error('Incorrect input!!')
    // }
    var result = number1 + number2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var number1 = 5;
var number2 = 10;
var printResult = true;
var resultPharse = 'Result is : ';
var addResult = add(number1, number2, printResult, resultPharse);
console.log(addResult);
