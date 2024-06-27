// unknown vs any
// never
var userInput;
var userName;
userInput = 5;
userInput = 'hi';
typeof userInput === 'string' ? (userName = userInput) : null;
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
var result = generateError('ERROR!!', 500);
console.log(result);
