type Person = {
  name: string;
  age: number;
  nickname?: string;
  hobiies: string[];
  role: [number, string];
};

const me: Person = {
  name: 'kiyori',
  age: 28,
  hobiies: ['movie', 'music', 'work'],
  role: [1, 'author'],
};

// const ADMIN = 0;
// const USER = 1;
// const READ_ONLY = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'hi',
}

const anotherPerson = {
  name: 'nobody',
  age: 0,
  hobiies: ['none'],
  role: Role.ADMIN,
};

me.role.push('dont occur error');

console.log(me.nickname);

for (const hobby of me.hobiies) {
  console.log(hobby.toUpperCase());
}
