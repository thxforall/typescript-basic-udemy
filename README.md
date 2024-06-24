# typescript-basic-udemy

Udemy Course 'Typecript with React + NodeJS'

---

## TypeScript Basic Course

TypeScript Challenge Step 1. TypeScript Basic

1. Introduction to TypeScript
2. Basic Types
3. Interfaces
4. Classes
5. Generics

---

### 1. Introduction to TypeScript

TypeScript는 JavaScript의 슈퍼셋으로, 정적 타입 검사 및 최신 ECMAScript 기능을 제공합니다. 코드의 가독성과 유지보수성을 높여줍니다.

**설치 방법:**

```sh
npm install -g typescript
```

**컴파일 방법:**

```sh
tsc filename.ts
```

### 2. Basic Types

TypeScript는 JavaScript의 기본 타입 외에도 여러 가지 타입을 추가로 제공합니다.

**예시:**

```typescript
let isDone: boolean = false;
let age: number = 30;
let firstName: string = 'John';
let list: number[] = [1, 2, 3];
```

### 3. Interfaces

인터페이스는 객체의 구조를 정의하는 데 사용됩니다. 클래스나 객체의 타입을 정의할 때 유용합니다.

**예시:**

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
};
```

### 4. Classes

클래스는 객체 지향 프로그래밍의 중요한 개념입니다. TypeScript에서는 ES6의 클래스 문법을 확장하여 사용합니다.

**예시:**

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog('Buddy');
dog.bark();
dog.move(10);
```

### 5. Generics

제네릭은 재사용 가능한 컴포넌트를 만들 때 사용됩니다. 다양한 타입에서 동작하는 컴포넌트를 작성할 수 있습니다.

**예시:**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>('myString');
let output2 = identity<number>(100);
```

이 내용을 `readme.md` 파일에 추가하시면 TypeScript 기본 개념을 요약한 문서를 완성할 수 있습니다.

```

```
