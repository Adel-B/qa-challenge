


# About the tests

## What ?
Integration/e2e ...
Test patterns: App action (via Redux store) + Page Object (I added the missing data-testid(s))

## How ?
The tests are written with [Cypress](https://docs.cypress.io/guides/overview/why-cypress) + [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).


## Where ?

Tests are located under `./cypress` :
```
./cypress
├── fixtures
│   ├── 1000CrewMember.json
│   ├── 10CrewMember.json
│   └── initialData.json
├── helpers
│   └── selectors.js
├── integration
│   ├── features
│   │   ├── filteringMember.feature
│   │   ├── hiringProcess.feature
│   │   └── homePage.feature
│   └── step_definitions
│       └── common
│           ├── Given.js
│           ├── Hooks.js
│           ├── Then.js
│           └── When.js
├── plugins
│   └── index.js
├── screenshots
└── support
    ├── commands.js
    └── index.js
```

## Todo / to continue:

See [the list here](https://github.com/Adel-B/qa-challenge/issues)