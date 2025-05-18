const numbers = [3, 6, 9, 12, 15, 18];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
console.log(sum);
