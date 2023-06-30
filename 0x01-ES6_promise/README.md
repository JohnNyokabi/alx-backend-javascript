# 0x01. ES6 Promises

## Requirements
        * vi/vim/emacs/Visual Studio Code
        * Ubuntu 20.04 LTS
        * NodeJS 12.11.x and above

## Installations
    `npm install --save-dev jest`
    ` npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
    `npm install --save-dev eslint`

    `$ npm install `

## Files
    `package.json`
    `babel.config.js`
    `utils.js`
    `.eslintrc.js`

## Tasks
    | Task | Descriptions |
    | ---- | ------------ |
    | [0-promise.js] (./0-promise.js) | Returns a Promise using this prototype `function getResponseFromAPI()` |
    | [1-promise.js] (./1-promise.js) | Returns a promise with boolean parameter from the prototype `getFullResponseFromAPI(success)` |
    | [ 2-then.js] (./ 2-then.js) | Uses the function prototype `function handleResponseFromAPI(promise)` to append handlers to the function. |
    | [3-all.js] (./3-all.js) | uses the prototype `function handleProfileSignup()` to collectively resolve all promises and log `body firstName lastName` to the console. |
    | [4-user-promise.js] (./4-user-promise.js) | Using the following prototype `function signUpUser(firstName, lastName) {}` return a resolved promise with an object |
    | [5-photo-reject.js] (./5-photo-reject.js) | Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string). The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed` |
    | [6-final-user.js] (./6-final-user.js) | Export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array |
    | [7-load_balancer.js] (./7-load_balancer.js) | export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise). The function should return the value returned by the promise that resolved the first. |
    | [8-try.js] (./8-try.js) | function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number). |
    | [9-try.js] (./9-try.js) | function named `guardrail` that will accept one argument `mathFunction` (Function). This function should create and return an array named `queue`. |
    | [100-await.js] (./100-await.js) | async function named asyncUploadUser that will call these two functions and return an object |