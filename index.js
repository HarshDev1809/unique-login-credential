// const defaultChoice = [
//   "capitalAlphabet",
//   "smallAlphabet",
//   "smallAlphabet",
//   "smallAlphabet",
// ];
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

// function getArray() {
//   for (let i = 0; i <= 25; i++) {
//     if (i <= 9) numbers.push(i);
//     smallAlphabets.push(String.fromCharCode(97 + i));
//     capitalAlphabets.push(String.fromCharCode(65 + i));
//   }
// }

const getFilledArray = (element, count) => {
  if (count < 1) {
    throw new Error("Invalid element count: element count is less than 1");
  }
  let arr = new Array(count);
  arr.fill(element);
  return arr;
};

// const generatePassword = (args) => {
//   console.log(args);
//   const length = 10;
//   if (length < 4) {
//     throw new Error(
//       "Invalid password length: password must be aleast 4 character long"
//     );
//   }
//   let choice = new Array();
//   if (length < 8) {
//     choice.push("capitalAlphabet");
//     choice.push(...getFilledArray("smallAlphabet", length - 3));
//     choice.push("number");
//     choice.push("specialCharacter");
//   } else {
//     choice.push("capitalAlphabet");
//     choice.push(...getFilledArray("smallAlphabet", length - 5));
//     choice.push(...getFilledArray("number", 2));
//     choice.push(...getFilledArray("specialCharacter", 2));
//   }
//   let password = "";
//   choice.forEach(function (value) {
//     let ch =
//       refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
//     if (ch !== undefined) password += ch;
//   });
//   return password;
// };

// console.log(generatePassword(9, "hello"));

const defaultPasswordOptions = {
    length: 8,
    capitalLetter: 1,
    smallLetter: 3,
    number: 2,
    specialCharacters: 2,
    random:false
  };

  const defaultUsernameOptions = {
    length: 6,
    capitalLetter: 1,
    smallLetter: 3,
    number: 2,
    specialCharacters: 0,
    random:false
  }

  export const uniquePassword = (options = {}) => {
    // Merge user-provided options with defaults
    const finalOptions = { ...defaultPasswordOptions, ...options };
    console.log(finalOptions)
    const { length, capitalLetter, smallLetter, number, specialCharacter,random } = finalOptions;
  
    // Check if the total requested character count exceeds the password length
    const totalRequested = capitalLetter + smallLetter + number + specialCharacter;
    if (totalRequested > length) {
      throw new Error("Invalid password length: Total character count exceeds the password length.");
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
      const types = ["capitalAlphabet", "smallAlphabet", "number", "specialCharacter"];
      choice.push(types[Math.floor(Math.random() * types.length)]);
    }
  
    // Shuffle the choice array to make the password less predictable
    if(random){
        choice = choice.sort(() => 0.5 - Math.random());
    }
    console.log(random)
    console.log(choice)
  
    // Generate the password from the choice array
    let password = "";
    choice.forEach(function (value) {
      const ch = refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
      if (ch !== undefined) password += ch;
    });
  
    return password;
  };

  export const uniqueUsername = (options = {})=>{
    const finalOptions = { ...defaultUsernameOptions, ...options };
    const { length, capitalLetter, smallLetter, number, specialCharacter,random } = finalOptions;
    console.log(finalOptions)
    const totalRequested = capitalLetter + smallLetter + number + specialCharacter;
    if (totalRequested > length) {
      throw new Error("Invalid username length: Total character count exceeds the username length.");
    }
    let choice = []

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
        const types = ["capitalAlphabet", "smallAlphabet", "number", "specialCharacter"];
        choice.push(types[Math.floor(Math.random() * types.length)]);
      }

      if(random){
        choice = choice.sort(() => 0.5 - Math.random());
    }

    console.log(choice)

    let username = "";
    choice.forEach(function (value) {
      const ch = refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
      if (ch !== undefined) {username += ch;}
    });
  
    return username;
  }
  