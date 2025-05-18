function teachers(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}
const director_teacher1 = new teachers("გიორგი", "სოფელიძე", 68);
const teacher2 = new teachers("ლევან", "ბოგვერაძე", 67);
const teacher3 = new teachers("ნინო", "ჯოგოლაშვილი", 68);
console.log(director_teacher1);
console.log(teacher2);
console.log(teacher3);
