let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector("#passBox");
let includeLetters = document.querySelector("#letters");
let includeNumbers = document.querySelector("#numbers");
let includeSpecialCharacters = document.querySelector("#characters");
let copyIcon = document.querySelector("#copy-icon");
let genBtn = document.querySelector("#genBtn");

sliderValue.innerHTML = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.innerHTML = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let letters = "ABCrstuvwDEFGHIJKLMNOUVWXYZabcdefghiPQRSTjklmnopqxyz";
let numbers = "0156749823";
let characters = "!@$^&`~%/#";

function generatePassword() {
  let finalPassword = "";
  let password = "";

  // Adding conditions as per user's choice
  if (includeLetters.checked === true) password += letters;
  if (includeNumbers.checked === true) password += numbers;
  if (includeSpecialCharacters.checked === true) password += characters;

  if (password) {
    for (let i = 0; i < inputSlider.value; i++) {
      finalPassword += password[Math.floor(Math.random() * password.length)];
    }
  }

  return finalPassword;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";

    setTimeout(() => {
      copyIcon.innerText = "content_copy";
    }, 2000);
  }
});
