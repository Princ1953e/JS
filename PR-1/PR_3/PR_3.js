let unit = 566;
TA = unit * 3;
TAA = unit * 4;
amount = undefined;
if (unit <= 50) {
  amount = unit * 1;
  console.log("amount", amount);
} else if (unit <= 150) {
  amount = unit * 2;
  console.log("amount", amount);
} else if (unit <= 250) {
  Per = (TA / 100) * 20;
  amount = TA + Per;
  console.log("amount", amount);
} else if (unit > 250) {
  Per = (TAA / 100) * 20;
  amount = TAA + Per;
  console.log("amount", amount);
}

document.getElementById("U").innerHTML = unit;
document.getElementById("Amount").innerHTML = amount;
document.getElementById("TAmount").innerHTML = amount;
