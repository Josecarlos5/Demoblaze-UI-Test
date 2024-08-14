# Demoblaze UI Test

## Project Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```sh
npm install
```

## Running the Tests

1. To run all tests:

```sh
npx mocha tests/*.test.js
```

## Tests Included

- `login.test.js`: Tests the login functionality.
- `add_to_cart.test.js`: Tests adding items to the shopping cart.
- `place_order.test.js`: Tests placing an order.

## Requirements

- Node.js
- Chrome browser
- ChromeDriver (compatible with your Chrome version)

Ensure ChromeDriver is accessible in your system PATH or specify its location in `webdriver-config.js`.
