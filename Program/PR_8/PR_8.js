let weight = 60;
let height = 10;
let BMI = weight / (height * height);

console.log("BMI IS", BMI);

if (BMI <= 40) {
  console.log("Underweight");
} else if (BMI <= 60) {
  console.log("Normal");
} else if (BMI <= 80) {
  console.log("Overweight");
}
