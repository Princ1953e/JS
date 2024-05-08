let year = 2022;
let leap = "Your Enter Year Is Leap";
let Normal = "Your Enter Year Is Normal";

if (year % 4 == 0) {
  console.log("Your Enter Year Is Leap");
  document.querySelector("h1").innerHTML = leap;
} else {
  console.log("Your Enter Year Is Normal");
  document.querySelector("h1").innerHTML = Normal;
}
