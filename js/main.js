let btn = document.querySelector("button");

currentYear = new Date().getFullYear();
// Add event listener to the button
btn.addEventListener("click", function (e) {
  let ageInYears = document.getElementById("age").value;
  let birthYear = document.getElementById("birth-year");
  if (isNaN(ageInYears)) {
    alert("Enter a valid age");
    return false;
  } else if (ageInYears < 0) {
    alert("Your age cannot be less than 0. Enter a valid age");
    return false;
  }

  birthYear.innerText = "You were born in " + (currentYear - ageInYears);
  birthYear.classList.add("birth-of-year");
  clearFields();

  e.preventDefault();
});
// Function clear fields
function clearFields() {
  document.getElementById("age").value = "";
}
