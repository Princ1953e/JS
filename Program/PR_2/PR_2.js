let Num = 1;
let even = "Your Enter Number Is Even";
let odd = "Your Enter Number Is Odd";
if (Num % 2 == 0) {
  console.log("Your Enter Number Is Even");
  document.querySelector("h1").innerHTML = even;
} else {
  console.log("Your Enter Number Is Odd");
  document.querySelector("h1").innerHTML = odd;
}
