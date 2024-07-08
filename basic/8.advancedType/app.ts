type Admin = {
  name: string;
  privileges: string[]; //권한
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'kiyori',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Comninable = string | number;
type Numeric = number | boolean;

type Universal = Comninable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Comninable, b: Comninable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', ' Kiyori');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'kiyori',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// const printEmployeeInfo = (emp: UnknownEmployee) => {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('StartDate: ' + emp.startDate);
//   }
// };

// printEmployeeInfo(e1);
// printEmployeeInfo({ name: 'kiyori', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving...');
//   }

//   loadCargo(amount: number) {
//     console.log(amount);
//   }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (vehicle: Vehicle) => {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }
// };

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (animal: Animal) => {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('Moving at speed ' + speed);
// };

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-intput');
// const userInputElement = document.getElementById(
//   'user-intput'
// )! as HTMLInputElement;

// userInputElement.value = `Hi there!`;

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a capital character',
// };
