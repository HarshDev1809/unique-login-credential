// File for CommonJS Version

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

// returns array of "element" of length "count"
const getFilledArray = (element, count) => {
  if (count < 1) {
    throw new Error("Invalid element count: element count is less than 1");
  }
  let arr = new Array(count);
  arr.fill(element);
  return arr;
};

// default password options
const defaultPasswordOptions = {
  length: 8,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacters: 2,
  random: false,
};

// default username options
const defaultUsernameOptions = {
  prefix: "",
  length: 6,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacters: 0,
  random: false,
};

// returns a unique password, with options from user
const uniquePassword = (options = {}) => {
  // Merge user-provided options with defaults
  const finalOptions = { ...defaultPasswordOptions, ...options };
  const {
    length,
    capitalLetter,
    smallLetter,
    number,
    specialCharacter,
    random,
  } = finalOptions;

  // Check if the total requested character count exceeds the password length
  const totalRequested =
    capitalLetter + smallLetter + number + specialCharacter;
  if (totalRequested > length) {
    throw new Error(
      "Invalid password length: Total character count exceeds the password length."
    );
  }

  let choice = [];

  // Add the requested number of each character type to the choice array
  if (capitalLetter > 0) {
    choice.push(...getFilledArray("capitalAlphabet", capitalLetter));
  }
  if (smallLetter > 0) {
    choice.push(...getFilledArray("smallAlphabet", smallLetter));
  }
  if (number > 0) {
    choice.push(...getFilledArray("number", number));
  }
  if (specialCharacter > 0) {
    choice.push(...getFilledArray("specialCharacter", specialCharacter));
  }

  // Fill the remaining length with random choices
  while (choice.length < length) {
    const types = [
      "capitalAlphabet",
      "smallAlphabet",
      "number",
      "specialCharacter",
    ];
    choice.push(types[Math.floor(Math.random() * types.length)]);
  }

  // Shuffle the choice array to make the password less predictable
  if (random) {
    choice = choice.sort(() => 0.5 - Math.random());
  }

  // Generate the password from the choice array
  let password = "";
  choice.forEach(function (value) {
    const ch =
      refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
    if (ch !== undefined) password += ch;
  });

  return password;
};

const uniqueUsername = (options = {}) => {
  const finalOptions = { ...defaultUsernameOptions, ...options };
  const {
    prefix,
    length,
    capitalLetter,
    smallLetter,
    number,
    specialCharacter,
    random,
  } = finalOptions;
  const totalRequested =
    capitalLetter + smallLetter + number + specialCharacter + prefix.length;
  if (totalRequested > length) {
    throw new Error(
      "Invalid username length: Total character count exceeds the username length."
    );
  }
  let choice = [];
  let username = "";
  let usernamePrefix = String(prefix);
  username += usernamePrefix;
  if (capitalLetter > 0) {
    choice.push(...getFilledArray("capitalAlphabet", capitalLetter));
  }
  if (smallLetter > 0) {
    choice.push(...getFilledArray("smallAlphabet", smallLetter));
  }
  if (number > 0) {
    choice.push(...getFilledArray("number", number));
  }
  if (specialCharacter > 0) {
    choice.push(...getFilledArray("specialCharacter", specialCharacter));
  }

  while (choice.length < length) {
    const types = [
      "capitalAlphabet",
      "smallAlphabet",
      "number",
      "specialCharacter",
    ];
    choice.push(types[Math.floor(Math.random() * types.length)]);
  }

  if (random) {
    choice = choice.sort(() => 0.5 - Math.random());
  }
  choice.forEach(function (value) {
    const ch =
      refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
    if (ch !== undefined) {
      username += ch;
    }
  });

  return username;
};

module.exports = {
  uniquePassword,
  uniqueUsername
};

