let input = "C";
document.getElementById("order");

switch (input) {
  case "A+":
    order.innerHTML = "Your Repot Is Excelent";
    break;

  case "A":
    order.innerHTML = "Your Repot Is Good";
    break;

  case "B+":
    order.innerHTML = "Your Repot Is Nice";
    break;

  case "B":
    order.innerHTML = "Your Repot Is Average";
    break;

  case "C":
    order.innerHTML = "Your Repot Is Poor";
    break;

  case "F":
    order.innerHTML = "Your Repot Is Fail..!! Try Again";
    break;

  default:
    order.innerHTML = "Your Input Is Not Vaild For Repot";
    break;
}
