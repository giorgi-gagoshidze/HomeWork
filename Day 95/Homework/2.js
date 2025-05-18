// ობიექტები
const me = {
  name: "Giorgi",
  surname: "Gagoshidze",
  age: 12
};

const sister = {
  name: "kato",
  surname: "gagoshidze",
  age: 17
};
console.log(me);
console.log(sister);
console.log(me.name);
console.log(me.surname);
console.log(me.age);
console.log(sister.name);
console.log(sister.surname);
console.log(sister.age);
me.age = 26;
sister.name = "KATO";
console.log(me);
console.log(sister);
me.hobby = "PROGRAMING";
sister.hobby = "studing";
console.log(me);
console.log(sister);
delete me.surname;
delete sister.age;
console.log(me);
console.log(sister);
