# Short Base16

## Description

This library uses Unicode to shorten base16 strings into half their length and also provides functionality to unshorten them.

## Installation

To install the library, use npm:

```bash
npm install short-base16
```

## Usage

### Shorten a Base16 String

To shorten a base16 string, use the `shortenBase16` function:

```typescript
import { shortenBase16 } from 'short-base16';

const base16String = "48656c6c6f20576f726c64"; // "Hello World" in base16
const shortened = shortenBase16(base16String);
console.log(shortened); // Outputs the shortened Unicode string
```

### Unshorten a Base16 String

To unshorten a base16 string, use the `unshortenBase16` function:

```typescript
import { unshortenBase16 } from 'short-base16';

const shortBase16String = "Hello World"; // Example shortened string
const unshortened = unshortenBase16(shortBase16String);
console.log(unshortened); // Outputs the original base16 string
```

## Scripts

- `build`: Compiles the TypeScript code to JavaScript.

## Author

Patiparnne Vongchompue

## License

ISC

## Keywords

- base16
- shorten
- short base16
- unicode
- utf
