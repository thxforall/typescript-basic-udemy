abstract class Department {
  static fisicalYear = 2024;
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, protected name: string) {
    // this.id = id;
    // this.name = n;
  }

  //   changeId(): void {
  //     this.id = 'd2';
  //   }

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeesInformation(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(): void {
    console.log(`Department(${this.id}) :` + this.name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUTING');
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string): void {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports(): void {
    console.log(this.reports);
  }

  describe(): void {
    console.log(`Department(${this.id}) :` + this.name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fisicalYear);

const itdepartment = new ITDepartment('d2', ['Max']);
// const accountingDepartment = new AccountingDepartment('d1', []);
const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment, accountingDepartment2);
itdepartment.addEmployee('Max');
itdepartment.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

itdepartment.describe();
itdepartment.printEmployeesInformation();

// accountingDepartment.mostRecentReport = 'Year End Report';
// accountingDepartment.addReport('Something went wrong...');
// accountingDepartment.addEmployee('Max');
// accountingDepartment.addEmployee('Anna');
// accountingDepartment.printEmployeesInformation();
// accountingDepartment.printReports();
// console.log(accountingDepartment.mostRecentReport);
