const userName = prompt("enter your name");
const userSurname = prompt("snter your surname");
const userAge = prompt("enter your age");
const user = {
  name: userName,
  surname: userSurname,
  age: userAge
};
console.log(user);
user.name = "cassandra";
console.log(user);
