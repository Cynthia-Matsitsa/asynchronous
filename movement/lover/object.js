//Given an array of objects, each object representing a person with a name and age property,
 //write a function that returns a new arraycontaining the names of all people who are 18 years old or older

 const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
 ];
 function aboveAge18(people){
    arrayAges=people.filter(person=>person.age>=18).map(person=>person.name);
 }
 console.log(aboveAge18(person));