// const person = {
//   firstName: "Ajinkya",
//   lastName: "Anwade",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// let obj=person;
// person.status= 'single';
// console.log(person.fullName());
// console.log(person.status);
// console.log(person);
// console.log(obj);

//constructor

function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
let myself=new Person('ajinkya','anwade',26);
new Person('aji','aji',23);
console.log(myself.firstName);