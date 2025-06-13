# Unique Login Credential

`unique-login-credential` is a versatile Node.js package for generating secure and customizable passwords and usernames. It offers flexible options to tailor credentials to your needs, making it ideal for applications requiring unique login credentials. The package supports both ES6 modules and CommonJS, with no need for `.default` in ES module imports, and includes full TypeScript support with type definitions.

## Features

- **Customizable Password Generation**: Define password length and composition, including capital letters, small letters, numbers, and special characters.
- **Flexible Username Generation**: Add prefixes and customize character composition for usernames.
- **TypeScript Support**: Fully typed with included TypeScript declarations for seamless integration.
- **ES6 and CommonJS Support**: Compatible with `import` and `require` module systems.
- **Randomization Option**: Shuffle characters for added security and uniqueness.

## Installation

Install the package via npm:

```bash
npm install unique-login-credential
```

## Usage

### ES Modules

For projects using ES modules, import the functions directly:

```javascript
import { uniquePassword, uniqueUsername } from 'unique-login-credential';

// Generate a password
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(`Generated Password: ${password}`);

// Generate a username
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

For CommonJS projects, use `require`:

```javascript
const { uniquePassword, uniqueUsername } = require('unique-login-credential');

// Generate a password
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(`Generated Password: ${password}`);

// Generate a username
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

### TypeScript

The package includes TypeScript type definitions. Use it in TypeScript projects as follows:

```typescript
import { uniquePassword, uniqueUsername } from 'unique-login-credential';

// Generate a password
const password = uniquePassword({
  length: 12,
  capitalLetter: 2,
  smallLetter: 4,
  number: 3,
  specialCharacter: 2,
  random: true
});
console.log(`Generated Password: ${password}`);

// Generate a username
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

### `uniquePassword(options)`

Generates a secure password based on the provided options.

**Parameters:**

- `options`: An object with the following properties:
  - `length` (number): Total length of the password. Must be at least the sum of `capitalLetter`, `smallLetter`, `number`, and `specialCharacter`. **Default:** 8
  - `capitalLetter` (number): Number of capital letters to include. **Default:** 1
  - `smallLetter` (number): Number of lowercase letters to include. **Default:** 3
  - `number` (number): Number of numeric digits to include. **Default:** 2
  - `specialCharacter` (number): Number of special characters to include. **Default:** 2
  - `random` (boolean): Whether to shuffle the characters randomly. **Default:** false

**Returns:** A string representing the generated password.

**Example:**

```typescript
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

### `uniqueUsername(options)`

Generates a unique username based on the provided options.

**Parameters:**

- `options`: An object with the following properties:
  - `prefix` (string): A prefix to prepend to the username. **Default:** ""
  - `length` (number): Total length of the username, including the prefix. Must be at least the sum of `capitalLetter`, `smallLetter`, `number`, `specialCharacter`, and the prefix length. **Default:** 6
  - `capitalLetter` (number): Number of capital letters to include. **Default:** 1
  - `smallLetter` (number): Number of lowercase letters to include. **Default:** 3
  - `number` (number): Number of numeric digits to include. **Default:** 2
  - `specialCharacter` (number): Number of special characters to include. **Default:** 0
  - `random` (boolean): Whether to shuffle the characters randomly. **Default:** false

**Returns:** A string representing the generated username.

**Example:**

```typescript
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

## Dependencies

- Node.js >= 12.x
- TypeScript >= 4.x (optional, for TypeScript users)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request describing your changes.

Please ensure your code adheres to the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, open an issue on the [GitHub repository](https://github.com/HarshDev1809/unique-login-credential/issues) or contact the maintainer at [dev182000@gmail.com](mailto:dev182000@gmail.com).