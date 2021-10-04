interface Person {
  name: string;
}

interface Drinker {
  drink: string;
}

interface Develpoer extends Person, Drinker {
  skill: string;
}

let fe: Develpoer = {
  name: 'sejune',
  skill: 'TypeScript',
  drink: 'Cass',
};


let fe2: Develpoer = {
  name: 'sejune',
  skill: 'TypeScript',
  drink: 'Hite',
}

console.log(fe)
console.log(fe2)