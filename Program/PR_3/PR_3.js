let input = "10";
document.getElementById("order");

switch (input) {
  case "10":
    order.innerHTML = "Your Repot Is Excelent";
    break;

  case "9":
    order.innerHTML = "Your Repot Is Good";
    break;

  case "8":
    order.innerHTML = "Your Repot Is Nice";
    break;

  case "7":
    order.innerHTML = "Your Repot Is Average";
    break;

  case "6":
    order.innerHTML = "Your Repot Is Poor";
    break;

  case "5":
    order.innerHTML = "Your Repot Is Below Average";
    break;

  case "4":
    order.innerHTML = "Your Repot Is Fail..!! Try Again";
    break;

  default:
    order.innerHTML = "Your Input Is Not Vaild For Repot";
    break;
}
