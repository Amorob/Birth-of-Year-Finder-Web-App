let btn = document.querySelector("button");

currentYear = new Date().getFullYear();
// Add event listener to the button
btn.addEventListener("click", function (e) {
  let ageInYears = document.getElementById("age").value;
  let birthYear = document.getElementById("birth-year");
  birthYear.innerText = "You were born in " + (currentYear - ageInYears);
  birthYear.classList.add("birth-of-year");
  clearFields();

  e.preventDefault();
});

function clearFields() {
  document.getElementById("age").value = "";
}
