let Num = -321;

if (Num > 0) {
  console.log("Your Enter Number Is Positive");
  document.querySelector("h1").innerHTML = Num;
} else if (Num < 0) {
  console.log("Your Enter Number is Negative");
  document.querySelector("h1").innerHTML = Num;
} else {
  console.log("Your Enter Number Is Static");
  document.querySelector("h1").innerHTML = Num;
}
