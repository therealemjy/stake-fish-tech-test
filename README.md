# Stake.fish Tech Test

## Setup

You only need to install the dependencies in order to set this project up:

```shell
npm install
```

## Development

### Running the project locally

To run the project locally, run the command:

```shell
npm run develop
```

Then visit [http://localhost:8000](http://localhost:8000).

### Running a production build locally

First build the project:

```shell
npm run build
```

Then launch the server:

```shell
npm run serve
```

Then visit [http://localhost:9000](http://localhost:9000).

### Automatic formatting

[Prettier](https://prettier.io/) has been added to the project in order to propose a unified format for all the Typescript files. You can format all the `.ts` and `.tsx` files manually by running the command `npm run format`, or install an extension for your IDE such as [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to get that done automatically for you every time you save.

## Tests

The project uses [Cypress](https://www.cypress.io/) to run end-to-end tests on each page. It is installed as a dev dependency, so once you've run `npm install` you can spin up the tests using the command:

```shell
npm run test
```

The tests will execute silently and output whether they were successful in you shell.
If you wish to choose which individual test to run you can execute the command in interactive mode, which will open Cypress as a standalone app:

```shell
npm run test:interactive
```

## Style guide

[Storybook](https://storybook.js.org/) is used in order to build the style guide of the app and which contains all the reusable components. It is also installed as a dev dependency so once you've run `npm install` you can open storybook using this set of commands:

```shell
npm run build-storybook
```

```shell
npm run storybook
```
