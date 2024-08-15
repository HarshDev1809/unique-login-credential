# Unique Login Credential Generator

This npm package generates unique, customizable login credentials for users. It offers flexibility to specify the length of passwords and define the number of characters from various character sets, including uppercase, lowercase, numbers, and special characters.

## Features

- **Customizable Length**: Set the password length according to your needs.
- **Character Set Control**: Choose the number of uppercase letters, lowercase letters, numbers, and special characters.
- **Error Handling**: Ensures the total number of specified characters does not exceed the password length.
- **Random Distribution**: Randomizes the characters to create unpredictable, secure passwords.

## Installation

To install the package, use npm:

```bash
npm install unique-login-credential
```

## Usage

Here's an example of how to use the package:

```javascript
const generatePassword = require('unique-login-credential');

// Generate a password with custom options
const options = {
  length: 12,
  numCapitalLetters: 3,
  numSmallLetters: 4,
  numNumbers: 2,
  numSpecialCharacters: 3,
};

const password = generatePassword(options);
console.log(password); // Example output: Ab3$dFg5#Hi
```

### Options

The `generatePassword` function accepts an object with the following properties:

- `length`: The total length of the password (default is 10).
- `numCapitalLetters`: Number of uppercase letters in the password (default is 1).
- `numSmallLetters`: Number of lowercase letters in the password (default is 1).
- `numNumbers`: Number of numbers in the password (default is 1).
- `numSpecialCharacters`: Number of special characters in the password (default is 1).

If the total number of specified characters exceeds the `length`, an error will be thrown.

### Example

```javascript
const password = generatePassword({
  length: 16,
  numCapitalLetters: 4,
  numSmallLetters: 5,
  numNumbers: 4,
  numSpecialCharacters: 3,
});

console.log(password); // Example output: 4aB$7Cz5dD@eF!gH
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
