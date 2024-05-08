let month = "Feb";

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("In Your Selected Month 31 Days");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("In Your Selected Month 30 Days");
    break;
  case "February":
    console.log("In Your Selected Month 29 Days");
    break;
  default:
    console.log("Invalid Month");
}
