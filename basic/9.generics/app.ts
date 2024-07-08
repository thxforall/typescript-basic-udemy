// const names: Array<string> = ['hi', '5', 'true'];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Max' }, { age: 30 });
// const mergeObj2 = merge({ name: 'Max', hobbies: ['Sports'] }, 30);
// console.log(mergeObj2);

interface ILengthy {
  length: number;
}

const countAndPrint = <T extends ILengthy>(element: T): [T, string] => {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
};

console.log(countAndPrint('Hi there!'));
console.log(countAndPrint([]));
console.log(countAndPrint(['Sports', 'Cooking']));

const extraAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return `Value: ` + obj[key];
};

console.log(extraAndConvert({ name: 'kiyori' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('hi');
textStorage.addItem('kiyori');
textStorage.removeItem('hi');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();

// const objStoarge = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// const kiyoriObj = { name: 'Kiyori' };
// objStoarge.addItem(kiyoriObj);
// objStoarge.addItem(maxObj);
// objStoarge.removeItem(maxObj);
// console.log(objStoarge.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['Kiyori', 'Max'];
names.push('Manu');
names.pop();
