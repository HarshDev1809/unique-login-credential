# Unique Login Credential

`unique-login-credential` is a versatile Node.js package designed to generate secure and customizable passwords and usernames. It allows you to specify various parameters to tailor the generated credentials to your specific needs. Whether you're building a new application or enhancing an existing one, this package provides an easy-to-use solution for credential generation.

## Features

- **Customizable Password Generation**: Specify the length and composition of your passwords, including capital letters, small letters, numbers, and special characters.
- **Flexible Username Generation**: Add prefixes and define the character composition for usernames.
- **Support for ES Modules and CommonJS**: Compatible with various JavaScript module systems.

## Installation

To install the package, use npm:

```bash
npm install unique-login-credential
```

## Usage

### ES Modules

If your project uses ES modules, you can import the functions using `import` statements:

```javascript
import { uniquePassword, uniqueUsername } from 'unique-login-credential';

// Generate a password with specific options
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(`Generated Password: ${password}`);

// Generate a username with specific options
const username = uniqueUsername({
  prefix: 'user_',
  length: 10,
  capitalLetter: 2,
  smallLetter: 5,
  number: 2,
  specialCharacter: 1,
  random: true
});
console.log(`Generated Username: ${username}`);
```

### CommonJS

For projects using CommonJS modules, import the functions using `require`:

```javascript
const { uniquePassword, uniqueUsername } = require('unique-login-credential');

// Generate a password with specific options
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(`Generated Password: ${password}`);

// Generate a username with specific options
const username = uniqueUsername({
  prefix: 'user_',
  length: 10,
  capitalLetter: 2,
  smallLetter: 5,
  number: 2,
  specialCharacter: 1,
  random: true
});
console.log(`Generated Username: ${username}`);
```

## Functions

### uniquePassword(options)

Generates a unique and secure password based on the provided options.

**Parameters:**

- `options`: An object with the following properties:
  - `length` (number): Total length of the password. The minimum value should be the sum of `capitalLetter`, `smallLetter`, `number`, and `specialCharacter`. **Default:** 8
  - `capitalLetter` (number): Number of capital letters to include. **Default:** 1
  - `smallLetter` (number): Number of small letters to include. **Default:** 3
  - `number` (number): Number of numeric digits to include. **Default:** 2
  - `specialCharacter` (number): Number of special characters to include. **Default:** 2
  - `random` (boolean): Whether to shuffle the characters in the password randomly. **Default:** false

**Returns:** A randomly generated password as a string.

**Example:**

```javascript
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(password); // Example output: "A1b@C2d!Ef3G"
```

### uniqueUsername(options)

Generates a unique username based on the provided options.

**Parameters:**

- `options`: An object with the following properties:
  - `prefix` (string): A prefix to add at the beginning of the username. **Default:** ""
  - `length` (number): Total length of the username, including the prefix. The minimum length should be the sum of `capitalLetter`, `smallLetter`, `number`, `specialCharacter`, and the length of the prefix. **Default:** 6
  - `capitalLetter` (number): Number of capital letters to include. **Default:** 1
  - `smallLetter` (number): Number of small letters to include. **Default:** 3
  - `number` (number): Number of numeric digits to include. **Default:** 2
  - `specialCharacter` (number): Number of special characters to include. **Default:** 0
  - `random` (boolean): Whether to shuffle the characters in the username randomly. **Default:** false

**Returns:** A randomly generated username as a string.

**Example:**

```javascript
const username = uniqueUsername({
  prefix: 'user_',
  length: 10,
  capitalLetter: 2,
  smallLetter: 5,
  number: 2,
  specialCharacter: 1,
  random: true
});
console.log(username); // Example output: "user_a1B2cD@"
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request describing your changes.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.