const smallAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const specialCharacters = ["!", "@", "#", "$", "_", "*"];

type CharType = "capitalAlphabet" | "smallAlphabet" | "number" | "specialCharacter";

const refrenceObj: Record<CharType, string[]> = {
  capitalAlphabet: capitalAlphabets,
  smallAlphabet: smallAlphabets,
  number: numbers,
  specialCharacter: specialCharacters,
};

const getFilledArray = (element: CharType, count: number): CharType[] => {
  if (count < 1) {
    throw new Error("Invalid element count: element count is less than 1");
  }
  return new Array(count).fill(element);
};

interface PasswordOptions {
  length?: number;
  capitalLetter?: number;
  smallLetter?: number;
  number?: number;
  specialCharacter?: number;
  random?: boolean;
}

interface UsernameOptions extends PasswordOptions {
  prefix?: string;
}

const defaultPasswordOptions: Required<PasswordOptions> = {
  length: 8,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacter: 2,
  random: false,
};

const defaultUsernameOptions: Required<UsernameOptions> = {
  prefix: "",
  length: 6,
  capitalLetter: 1,
  smallLetter: 3,
  number: 2,
  specialCharacter: 0,
  random: false,
};

export const uniquePassword = (options: PasswordOptions = {}): string => {
  const finalOptions = { ...defaultPasswordOptions, ...options };
  const {
    length,
    capitalLetter,
    smallLetter,
    number,
    specialCharacter,
    random,
  } = finalOptions;

  const totalRequested =
    capitalLetter + smallLetter + number + specialCharacter;

  if (totalRequested > length) {
    throw new Error(
      "Invalid password length: Total character count exceeds the password length."
    );
  }

  let choice: CharType[] = [];

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
    const types: CharType[] = [
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

  let password = "";
  choice.forEach((type) => {
    const ch = refrenceObj[type][Math.floor(Math.random() * refrenceObj[type].length)];
    if (ch !== undefined) password += ch;
  });

  return password;
};

export const uniqueUsername = (options: UsernameOptions = {}): string => {
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

  let choice: CharType[] = [];
  let username = prefix;

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

  while (choice.length < length - prefix.length) {
    const types: CharType[] = [
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

  choice.forEach((type) => {
    const ch = refrenceObj[type][Math.floor(Math.random() * refrenceObj[type].length)];
    if (ch !== undefined) username += ch;
  });

  return username;
};
