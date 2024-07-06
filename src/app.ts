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

const add = (a: Comninable, b: Comninable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('StartDate: ' + emp.startDate);
  }
};

printEmployeeInfo(e1);
printEmployeeInfo({ name: 'kiyori', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving...');
  }

  loadCargo(amount: number) {
    console.log(amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}; 

useVehicle(v1);
useVehicle(v2);
