//NOTE: Numerical Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const numericalArrayOperations = () => {
  console.log(`Numerical Array Operations`);

  //TODO: Getting properties of an array
  console.log(`The length of the array is ${numbers.length}`);
  console.log(`The value of index 1 is ${numbers[1]}`);
  console.log(`The value of index is ${numbers.at(1)}`);

  //TODO: Merge two arrays
  const merged = numbers.concat(numbers2);
  console.log(`The merged array is ${merged}`);

  // TODO: Looping classic for loop
  for (let i = 0; i < numbers.length; i++) {
    console.log(`The number at index ${i} is ${numbers[i]}`);
  }

  //TODO: Looping forEach
  for (let number of numbers) {
    console.log(`The number is ${number}`);
  }

  //NOTE: Common Iterators

  //TODO: The Iterator Demo
  const numberEntries = numbers.entries();
  // Default return as array with [index, value]
  console.log(numberEntries.next().value);

  // Playing with the iterator
  // Getting the return value of the iterator assigning it to a variable
  const [index, value] = numberEntries.next().value;
  console.log(`The index is ${index} and the value is ${value}`);

  //TODO: Using Iterator Methods
  numbers.forEach((number, index) => {
    console.log(`The number at index ${index} is ${number}`);
  });

  //TODO: Reducers!
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(`The sum of all the contents in the array is ${sum}`);

  //NOTE: Syntatic Sugars
  const isGreaterThan10 = (number) => number > 10;
  const isLessThan10 = (number) => number < 10;

  const lessThan10 = merged.filter(isLessThan10);
  const greatherThan10 = merged.filter(isGreaterThan10);
  console.log(lessThan10);
  console.log(greatherThan10);
};

//NOTE: Importing Data from other files
import { Users } from './data.js';

//NOTE: Common Array Methods

export const length = Users.length;

//TODO: 1. Filter Data
export const filteredUsers = Users.filter((user) => user.gender === 'Male');
