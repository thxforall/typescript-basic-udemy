//union type
//literal type
//type alias

type NumString = number | string;
type Conversation = 'as-number' | 'as-text';

type Combinable = (
  input1: NumString,
  input2: NumString,
  resultConversation: Conversation
) => NumString;

const combine: Combinable = (input1, input2, resultConversation) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversation === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineAge = combine(20, 30, 'as-number');
console.log(combineAge);

const combineStringAge = combine('20', '30', 'as-number');
console.log(combineStringAge);

const combineName = combine('Baek', 'kiyeol', 'as-text');
console.log(combineName);
