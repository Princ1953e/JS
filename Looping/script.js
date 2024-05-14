let con = "";
let loop = document.getElementById("Loop");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    con += j;
  }
  con += "</br>";
}

loop.innerHTML = con;
