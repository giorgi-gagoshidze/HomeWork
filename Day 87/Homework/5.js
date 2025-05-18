let number = 10;
let left = 1;
let Input = parseInt(
    prompt('Enter your guess: ')
);
while (
    Input !== number
) {
    tries ++;
    if (
        Input < number
    ) {
        console.log("number is small than secret number try again!");
    } 
    else if (
        Input > number
    ) {
        console.log("number is bigger than secret number try again!");
    }
    Input = parseInt(
        prompt('Enter number again wish u luck!: ')
    );
}
console.log(`congratulations! you guessed in ${tries}!`);//es gakvetilze maswavlebelma gvitxra no chatgpt used.
tries++;
