// unknown vs any
// never

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'hi';

typeof userInput === 'string' ? (userName = userInput) : null;

function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

const result = generateError('ERROR!!', 500);
console.log(result);
