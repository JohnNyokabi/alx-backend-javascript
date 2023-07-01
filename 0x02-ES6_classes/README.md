# 0x02. ES6 classes

## Requirements
      - Ubuntu 20.04 LTS
      - Vi/Vim/Emacs/VSCode
      - Jest
      - NodeJS version 12.11.x

## Installations
      $ sudo apt install nodejs -y
      $ npm install --save-dev jest
      $ npm install --save-dev babel-jest @babel/core @babel/ preset-env
      $ npm install --save-dev eslint
      $ npm install (for all dependencies)

## Configuration files
      - package.json
      - babel.config.js
      - eslintrc.js

## Tasks
  | Task | Descriptions |
  | ---- | ------------ |
  | 0-classroom.js | implements class with prototype `export default class ClassRoom` that accepts an attribute `maxStudentsSize` and assigns to `_maxStudentsSize`. |
  | 1-make_classrooms.js | Function `initializeRooms` that return an array of 3 `ClassRoom` objects with the size `19`, `20` and `34` |
  | 2-hbtn_course.js | implements class `HolbertonCourse` where each attributes are store in an "underscore" attribute version |
  | 3-currency.js | Implements class `Currency` with a method named `displayFullCurrency` that will return the attributes in the following format `name (code)` |
  | 4-pricing.js | Implements class `pricing` with a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the `amount` multiplied by the conversion rate |
  | 5-building.js | Implements an abstract class `Building` from which any class that extends from it should implement a method named `evacuationWarningMessage`. |
  | 6-sky_high.js | Imports `Building` from `5-building.js` and implements a class named `SkyHighBuilding` that extends from `Building` |
  | 7-airport.js | Implements class named `Airport` where the default string description returns the airport code |
  | 8-hbtn_class.js | Class named `HolbertonClass` where when the class is cast into a `Number`, it returns size. Else if cast into a `String` returns location |
  | 9-hoisting.js | Fixing the `Hoisting` snippet |
  | 10-car.js | class named `Car` that contains `cloneCar` method which returns a new object of the class |
  | 100-evcar.js | class named `EVCar` that extends the `Car` class, when `cloneCar` is called on a EVCar object, the object returned should be an instance of `Car` instead of `EVCar` |