// Variable declaration

const submitBtn = document.querySelector(".btn");
const okBtn = document.getElementById("okBtn");
const popUp = document.getElementById("popup");

// Function to add the popUp when clicked on submit button

submitBtn.addEventListener("click", () => {
  popUp.classList.add("open-popup");
});

// Function to remove the popUp on when clicked on Ok button

okBtn.addEventListener("click", () => {
  popUp.classList.remove("open-popup");
});

