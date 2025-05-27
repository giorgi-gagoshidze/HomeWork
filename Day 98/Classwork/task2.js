function Person(name, lastname, age) {
  this.name = name
  this.lastname = lastname
  this.age = age
}
function createPerson() {
  const person = new Person("Sandro", "Zabakhidze", 17)
  console.log(person)
}