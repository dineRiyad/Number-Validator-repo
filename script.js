const validationForm = document.getElementById("validation-form");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const fitstReg = /^1?\s?\(\d{3}\)\s?\d{3}\s?-?\d{4}$/;
const secondReg = /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const regexArray = [fitstReg, secondReg];

const results = (input) => {
  if (regexArray.some((regex) => regex.test(input))) {
    resultsDiv.innerHTML += `<p class="valid-input font">Valid US number: ${input}</p>`;
  } else {
    resultsDiv.innerHTML += `<p class="invalid-input font">Invalid US number: ${input}</p>`;
  }
};

const isEmptyOrInvalid = (value) => {
  value = userInput.value;

  if (!value) {
    alert("Please provide a phone number");
  } else {
    results(value);
    userInput.value = "";
  }
};

validationForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isEmptyOrInvalid();
  }
});

checkBtn.addEventListener("click", isEmptyOrInvalid);

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});
