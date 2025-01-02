// Character sets for password generation
const numbersArray = "0123456789";
const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const passwordSymbolsArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Initialize allCharacters as an empty Set
let allCharacters = new Set();

// Get the "Letters" checkbox
const lettersCheckbox = document.querySelector(
  '.radio-container input[type="checkbox"][value="Letters"]'
);

// Initialize allCharacters if the checkbox is checked on load
if (lettersCheckbox.checked) {
  alphabetArray.split("").forEach((char) => allCharacters.add(char));
}

lettersCheckbox.addEventListener("change", () => {
  if (lettersCheckbox.checked) {
    alphabetArray.split("").forEach((char) => allCharacters.add(char));
  } else {
    alphabetArray.split("").forEach((char) => allCharacters.delete(char));
  }
});

// Get the "Numbers" checkbox
const numbersCheckbox = document.querySelector(
  '.radio-container input[type="checkbox"][value="Numbers"]'
);

// Initialize allCharacters if the checkbox is checked on load
if (numbersCheckbox.checked) {
  numbersArray.split("").forEach((char) => allCharacters.add(char));
}

numbersCheckbox.addEventListener("change", () => {
  if (numbersCheckbox.checked) {
    numbersArray.split("").forEach((char) => allCharacters.add(char));
  } else {
    numbersArray.split("").forEach((char) => allCharacters.delete(char));
  }
});

// Get the "Symbols" checkbox
const symbolsCheckbox = document.querySelector(
  '.radio-container input[type="checkbox"][value="Symbols"]'
);

// Initialize allCharacters if the checkbox is checked on load
if (symbolsCheckbox.checked) {
  passwordSymbolsArray.split("").forEach((char) => allCharacters.add(char));
}

symbolsCheckbox.addEventListener("change", () => {
  if (symbolsCheckbox.checked) {
    passwordSymbolsArray.split("").forEach((char) => allCharacters.add(char));
  } else {
    passwordSymbolsArray
      .split("")
      .forEach((char) => allCharacters.delete(char));
  }
});

// Function to generate a random password using cryptographic randomness
export function generateRandomPassword(length) {
  if (allCharacters.size === 0) {
    throw new Error("No character sets selected for password generation!");
  }

  let randomPassword = "";
  const charactersArray = Array.from(allCharacters); // Convert Set to Array

  for (let i = 0; i < length; i++) {
    const randomIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % charactersArray.length;
    randomPassword += charactersArray[randomIndex];
  }

  return randomPassword;
}
