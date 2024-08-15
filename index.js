const defaultChoice = [
  "capitalAlphabet",
  "smallAlphabet",
  "smallAlphabet",
  "smallAlphabet",
];
const smallAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = ["!", "@", "#", "$", "_", "*"];
const refrenceObj = {
  capitalAlphabet: capitalAlphabets,
  smallAlphabet: smallAlphabets,
  number: numbers,
  specialCharacter: specialCharacters,
};

// getArray();

function getArray() {
  for (let i = 0; i <= 25; i++) {
    if (i <= 9) numbers.push(i);
    smallAlphabets.push(String.fromCharCode(97 + i));
    capitalAlphabets.push(String.fromCharCode(65 + i));
  }
}

const getFilledArray = (element, count) => {
  if (count < 1) {
    throw new Error("Invalid element count: element count is less than 1");
  }
  let arr = new Array(count);
  arr.fill(element);
  return arr;
};

const generatePassword = (args) => {
  console.log(args);
  const length = 10;
  if (length < 4) {
    throw new Error(
      "Invalid password length: password must be aleast 4 character long"
    );
  }
  let choice = new Array();
  if (length < 8) {
    choice.push("capitalAlphabet");
    choice.push(...getFilledArray("smallAlphabet", length - 3));
    choice.push("number");
    choice.push("specialCharacter");
  } else {
    choice.push("capitalAlphabet");
    choice.push(...getFilledArray("smallAlphabet", length - 5));
    choice.push(...getFilledArray("number", 2));
    choice.push(...getFilledArray("specialCharacter", 2));
  }
  let password = "";
  choice.forEach(function (value) {
    let ch =
      refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
    if (ch !== undefined) password += ch;
  });
  return password;
};

console.log(generatePassword(9, "hello"));
