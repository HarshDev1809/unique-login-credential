# Unique Login Credential Generator

**Unique Login Credential Generator** is a highly customizable npm package that generates secure and unique usernames and passwords based on specified criteria. This package is perfect for applications that require user authentication with unique credentials, providing flexibility and security.

## Features

- **Customizable Password Generation**: Configure the total length and composition of the password, including uppercase letters, lowercase letters, numbers, and special characters.
- **Customizable Username Generation**: Generate unique usernames with options for prefixes, character types, and length.
- **Error Handling**: Built-in validation ensures that the total number of characters specified does not exceed the desired length.
- **Randomization**: Optional random shuffling of characters to make passwords and usernames less predictable.

## Installation

Install the package via npm:

```bash
npm install unique-login-credential
```

## Usage

### 1. Generating a Password

The `uniquePassword()` function generates a password based on customizable options. You can specify the number of characters for each type (uppercase, lowercase, numbers, and special characters) and the total length.

```javascript
const { uniquePassword } = require('unique-login-credential');

// Generate a secure password with custom options
const passwordOptions = {
  length: 12,                // Total length of the password
  capitalLetter: 3,          // Number of uppercase letters
  smallLetter: 4,            // Number of lowercase letters
  number: 3,                 // Number of numeric digits
  specialCharacter: 2,       // Number of special characters
  random: true,              // Shuffle characters randomly
};

const password = uniquePassword(passwordOptions);
console.log(password); // Example output: T3r@pG7jH$q2
```

#### Password Parameters:

- **`length`**: The total length of the password (default: 8).
- **`capitalLetter`**: The number of uppercase letters in the password (default: 1).
- **`smallLetter`**: The number of lowercase letters in the password (default: 3).
- **`number`**: The number of numeric characters in the password (default: 2).
- **`specialCharacter`**: The number of special characters in the password (default: 2).
- **`random`**: Boolean flag indicating whether to shuffle characters randomly (default: `false`).

If the total number of specified characters exceeds the `length`, an error will be thrown.

### Example: Custom Password Generation

```javascript
const customPasswordOptions = {
  length: 10,
  capitalLetter: 2,
  smallLetter: 3,
  number: 2,
  specialCharacter: 3,
  random: true,
};

const password = uniquePassword(customPasswordOptions);
console.log(password); // Example output: 4xT&@rJ5!a
```

### 2. Generating a Username

The `uniqueUsername()` function generates a username with customizable options, including a prefix, total length, and the number of different character types.

```javascript
const { uniqueUsername } = require('unique-login-credential');

// Generate a unique username
const usernameOptions = {
  prefix: 'user_',         // Prefix for the username
  length: 10,              // Total length of the username
  capitalLetter: 2,        // Number of uppercase letters
  smallLetter: 4,          // Number of lowercase letters
  number: 2,               // Number of numeric digits
  specialCharacter: 1,     // Number of special characters
  random: true,            // Shuffle characters randomly
};

const username = uniqueUsername(usernameOptions);
console.log(username); // Example output: user_X9#pAd3
```

#### Username Parameters:

- **`prefix`**: A string that will be added at the beginning of the username (default: empty string).
- **`length`**: The total length of the username, including the prefix (default: 6).
- **`capitalLetter`**: The number of uppercase letters in the username (default: 1).
- **`smallLetter`**: The number of lowercase letters in the username (default: 3).
- **`number`**: The number of numeric characters in the username (default: 2).
- **`specialCharacter`**: The number of special characters in the username (default: 0).
- **`random`**: Boolean flag indicating whether to shuffle characters randomly (default: `false`).

### Example: Custom Username Generation

```javascript
const customUsernameOptions = {
  prefix: 'admin_',        // Prefix for the username
  length: 12,
  capitalLetter: 3,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true,
};

const username = uniqueUsername(customUsernameOptions);
console.log(username); // Example output: admin_A1#bC4$dFg3
```

## Error Handling

Both `uniquePassword()` and `uniqueUsername()` include error handling to ensure the user does not provide invalid configurations. For example:
- If the total number of specified character types exceeds the total length, an error will be thrown.
- Invalid counts (e.g., negative numbers) will result in an error.

Example of error handling:

```javascript
try {
  const password = uniquePassword({
    length: 6,
    capitalLetter: 4,
    smallLetter: 4,
  });
} catch (error) {
  console.error(error.message); // Output: "Invalid password length: Total character count exceeds the password length."
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
