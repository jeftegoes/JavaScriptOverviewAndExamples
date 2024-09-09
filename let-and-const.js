const name = "Jefté";
let age = 33;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));

let x = 10;
x = 20;
console.log(x);

// const y = 10; # ERROR!!!!
const obj = { name: "Jefté" };
obj.name = "Brenno";
console.log(obj);
