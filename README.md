# React Animal webpage

## WebPack DEV Server

To run the dev server:
`.\node_modules\.bin\webpack-dev-server`

## Babel warn

To avoid Babel transpiling `node_modules` code
`[BABEL] Note: The code generator has deoptimised the styling of "C:/Users/IRodri26/Documents/projects/pilots/react/LinkedInReactRecipes/recipes/node_modules/react-dom/cjs/react-dom.development.js" as it exceeds the max of "500KB".`
-> in webpack.config.js exclude: /node_modules/
=> server starts faster

## Packages

`yarn add html-webpack-plugin`
`yarn add react`
`yarn add babel-preset-react --dev`
`yarn add react-dom`
`yarn add file-loader --dev`
`yarn add dotenv --dev`
`yarn add whatwg-fetch`
`yarn add babel-preset-stage-0`

## CSS

1. `yarn add basscss basscss-colors basscss-background-colors`
1. `yarn add style-loader --dev`
1. `yarn add postcss --dev`
1. `yarn add postcss-cssnext postcss-import --dev`
1. `yarn add css-loader postcss-loader --dev`
Pass many classNames as arguments, and in case one of them is null, it won't render it.
1. `yarn add classnames`

webpack => `loader: ['style-loader', 'css-loader', 'postcss-loader']`:
postcss-loader take .css files and transpile them
the output of that translation will be sent to 'css-loader' that will make the css available using the require that will make possible to import CSS in JS code
Then to 'style-loader' to inject those styles into index.html

## Linter

Linter: Tool that detects and flags errors in programming languages without executing them.
Coding style guide among a team.

ESLint: Open-source JavaScript Linting Utility

1. `yarn add eslint --dev`
1. Add rhe lint script in the `package.json` -> `"lint": "./node_modules/.bin/eslint ./src"`
1. Init lint `./node_modules/.bin/eslint --init`
`? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JSON`
1. `yarn add babel-eslint --dev`
1. Add `"parser": "babel-eslint",` to `.eslintrc.json`
1. Pass the linter with `yarn lint`
1. Clean lint errors:
    * Proptypes errors:
        1. `yarn add prop-types`
        1. Add property type validation per class
        1. Add rule if wanted to the lin config: `react/forbid-prop-types: 0`
    * `error  Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style`
    When using VSCode on Windows, click the option at the bottom-right of the window and set it to LF from CRLF. Should not turn off the configuration just for sake of removing errors. (<https://stackoverflow.com/questions/37826449/expected-linebreaks-to-be-lf-but-found-crlf-linebreak-style>)

## Prettier

Tool for building and enforcing a style guide.

1. `yarn add prettier --dev`
1. `./node_modules/.bin/prettier ./src/components/*.js --write`
1. `.eslintrc.json` 'airbnb' rules predominant to 'prettier' rules (order matters):
    `"extends": [
        "prettier",
        "airbnb"
    ],`
1. `yarn add eslint-config-prettier --dev`

## Husky

Precommiting step to apply lint ant prettier rules before commiting.
Not fully working right now.
` "lint": "./node_modules/.bin/eslint ./src",
        // "precommit": "lint-staged"
    },
    "lint-staged": {
        "*.js": [
            "yarn lint",
            "prettier --write",
            "git add"
        ]
    },`
