const validationForm = document.getElementById("validation-form");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const isEmptyOrInvalid = (value) => {
  value = userInput.value;

  if (!value) {
    alert("Please provide a phone number");
  } else {
    console.log(value);
  }
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isEmptyOrInvalid;
  }
});

checkBtn.addEventListener("click", isEmptyOrInvalid);

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});

validationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  isEmptyOrInvalid();
});
