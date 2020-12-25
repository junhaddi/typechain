interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'junha',
  age: 19,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `name: ${person.name}, age: ${person.age}, gender: ${person.gender}`;
};

console.log(sayHi(person));

export {};
