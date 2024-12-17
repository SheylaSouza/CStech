## Prerequisites

Make sure you have the following tools installed on your system before proceeding:
- **Node.js** (Recommended version: 14 or above)
- **npm** (Node package manager)

## Table of Contents

- [Installation](#installation)
- [Test Description](#test-description)
- [Test Structure](#test-structure)
- [Running the Test](#running-the-test)
- [Enhancements](#enhancements)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Installation

### 1. Install Dependencies

Run the following npm commands to install the necessary dependencies for your test environment:

```bash
# Install Cypress and necessary plugins
npm install -D cypress-xpath
npm install @badeball/cypress-cucumber-preprocessor
npm install typescript --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor
npm install cypress @bslab/herkin --save-dev
npm install @cypress/webpack-preprocessor --save-dev
```

These dependencies will provide the following:

- **`cypress-xpath`**: Support for XPath selectors in Cypress tests.
- **`cypress-cucumber-preprocessor`**: Support for Gherkin syntax to write tests in a BDD style.
- **`typescript`**: TypeScript support for better type checking and autocompletion.
- **`@bahmutov/cypress-esbuild-preprocessor`**: Preprocessing TypeScript and JavaScript code for faster builds.
- **`@bslab/herkin`**: Integration of Gherkin with Cypress for behavior-driven testing.
- **`@cypress/webpack-preprocessor`**: Webpack preprocessor for Cypress tests.
```

This will launch the Cypress Test Runner and allow you to run your tests.


## Test Structure

Your project folder will be structured like this:

```
/cypress
  /e2e
    /features
      add-to-cart.feature       # Gherkin feature files
    /step_definitions
      add-to-cart.steps.js      # Step definition files
  /support
    commands.js                # Custom Cypress commands
  /fixtures
    example.json               # Sample test data (optional)
cypress.config.js              # Cypress configuration file
package.json                   # Project metadata and dependencies
tsconfig.json                  # TypeScript configuration
```

## Running the Test

### 1. Open Cypress Test Runner

To open Cypress Test Runner, use the following command:

```bash
npm cypress open
```

## Enhancements

1. **Use TypeScript for Step Definitions**:  
   You can write your step definitions in TypeScript for better type-checking and autocompletion. Make sure to configure the `tsconfig.json` file appropriately.

2. **Custom Commands**:  
   You can extend Cypress with custom commands by adding them to `commands.js` for better reuse and organization.

## Troubleshooting

1. **Cypress not opening**:  
   If Cypress fails to open, make sure you have installed it correctly by running `npm install` again and checking if Cypress appears in your `node_modules`.

2. **Dependency conflicts**:  
   Ensure all dependencies are correctly installed and up-to-date. If there are version mismatches, try deleting `node_modules` and `package-lock.json`, then running `npm install` again.

3. **XPath not working**:  
   Ensure you installed `cypress-xpath` and added `require('cypress-xpath')` in your `commands.js` or `support/index.js` file.

```javascript
require('cypress-xpath');
```