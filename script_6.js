const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

var peopleFromTheSeventies = entrepreneurs.filter(function (item) {
  return item.year >= 1970 &&
    item.year <= 1979;
});

console.log("Voici la liste des entrepreneurs nés en 1970:")
console.log(peopleFromTheSeventies);

function fullNames() {
  let names = [];
  for (let i = 0; i < entrepreneurs.length; i++) {
    names[i] = entrepreneurs[i].first + " " + entrepreneurs[i].last;
  }
  return names;
}

console.log('Voici la liste des prénoms noms :');
console.log(fullNames());

function age() {
  let today = 2018
  let age = [];
  for (let i = 0; i < entrepreneurs.length; i++) {
    age[i] = entrepreneurs[i].first + " " + entrepreneurs[i].last + " : " + (today - entrepreneurs[i].year) + " ans"
  }
  return age;
}

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
console.log(age());