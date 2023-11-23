const headingElement = document.getElementById("heading");
const inputElement = document.getElementById("input-name");
const buttonElement = document.getElementById("enter-button");

buttonElement.addEventListener("click", function (event) {
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    headingElement.innerText = "Thank You ";
  }
});
