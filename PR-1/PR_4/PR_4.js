let P = 1000;
let R = 11;
let N = 10;

if (N > 3) {
  if (N <= 5) {
    R = 3;
  }
  if (N > 8) {
    if (N <= 12) {
      R = 12;
    } else {
      R = 15;
    }
  } else {
    R = 12;
  }
} else {
  if (N > 5) {
    if (N <= 8) {
      R = 5;
    } else {
      R = 15;
    }
  } else {
    if (N > 8) {
      if (N <= 12) {
        R = 12;
      } else {
        R = 15;
      }
    } else {
      R = 12;
    }
  }
}

let A = (P * R * N) / 100;
console.log("R IS ", R);
console.log("A IS ", A);
