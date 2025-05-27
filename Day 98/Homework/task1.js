function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.info = function() {
        return `${this.year} ${this.make} ${this.model}`
    };
    this.age = function() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.year
    };
}
const car1 = new Car("Toyota", "idk", 2015)
const car2 = new Car("nissan", "blublu", 2002)
const car3 = new Car("Elanta", "idk", 2020)
console.log(car1.info(), "- Age:", car1.age())
console.log(car2.info(), "- Age:", car2.age())
console.log(car3.info(), "- Age:", car3.age())
function Rectangle(width, height) {
    this.width = width
    this.height = height
    this.space = function() {
        return this.width * this.height
    };
    this.p = function() {
        return 2 * (this.width + this.height)
    }
}
const blubl = new Rectangle(5, 10)
console.log("space:", blubl.space())
console.log("perimiter:", blubl.p())