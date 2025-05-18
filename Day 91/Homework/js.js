function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    weight = parseFloat(weight);
    height = parseFloat(height);
    height = height / 100; 
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        alert("Underweight");
    } 
    else if (bmi < 24.9) {
        alert("Normal weight");
    } 
    else if (bmi < 29.9) {
        alert("Overweight");
    } 
    else {
        alert("Obesity");
    }
}
