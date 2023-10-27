console.log(`Prblm No. : 1`);
function countOccurrences(arr) {
  const elementCountMap = new Map();

  for (const element of arr) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  return elementCountMap;
}

const arr = [1, 2, 3, 2, 1, 4, 5, 4];
const result = countOccurrences(arr);
console.log(result);
console.log(`<---------------------->`);

console.log(`Prblm No. : 2`);
function hasSubarrayWithSum(arrOne, targetSum) {
  const prefixSumSet = new Set();
  let currentSum = 0;

  for (const element of arrOne) {
    currentSum += element;

    if (currentSum === targetSum) {
      return true;
    }

    if (prefixSumSet.has(currentSum - targetSum)) {
      return true;
    }

    prefixSumSet.add(currentSum);
  }

  return false;
}

const arrOne = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const res = hasSubarrayWithSum(arrOne, targetSum);
console.log(result);
console.log(`<---------------------->`);



console.log(`Prblm No. : 4`);
const arrThree = ["apple", "banana", "orange"];

const reversedArray = arrThree.map((str) => {
  return str.split("").reverse().join("");
});

console.log(reversedArray);
console.log(`<---------------------->`);



console.log(`Prblm No. : 5`);
const arrFour = [1, 2, 4, 7, 9, 16, 25];

const perfectSquares = arrFour.filter((number) => {
  return Math.sqrt(number) % 1 === 0;
});
console.log(perfectSquares);
console.log(`<---------------------->`);



console.log(`Prblm No. : 6`);
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };

function mergeObjects(obj1, obj2) {
  const mergedObject = {};

  for (const key in obj1) {
    mergedObject[key] = obj1[key];
  }

  for (const key in obj2) {
    mergedObject[key] = obj2[key];
  }

  return mergedObject;
}

const mergeObject = mergeObjects(obj1, obj2);
console.log(mergeObject);
console.log(`<---------------------->`);



console.log(`Prblm No. : 7`);
const arrFive = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const mergedObject = Object.assign(
  {},
  ...arrFive.map((item) => ({ [item.key]: item.value }))
);

console.log(mergedObject);
console.log(`<---------------------->`);




console.log(`Prblm No. : 8`);
function displayArray([first, second, ...rest]) {
  console.log(`First Element: ${first}`);
  console.log(`Second Element: ${second}`);
  console.log(`Rest Elements: ${rest.join(",")}`);
}

const arrSix = [1, 2, 3, 4, 5];
displayArray(arrSix);
console.log(`<---------------------->`);



console.log(`Prblm No. : 9`);
function sumNestedObject(obj) {
  let total = 0;

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    } else if (typeof obj[key] === "object") {
      total += sumNestedObject(obj[key]);
    }
  }

  return total;
}

const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};

const sum = sumNestedObject(nestedObj);
console.log(`Sum: ${sum}`);
console.log(`<---------------------->`);



console.log(`Prblm No. : 10`);
const obj = { name: "John", age: 30, city: "New York", profession: "Engineer" };

function countPropertyOccurrences(obj) {
  const propertyCount = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (propertyCount[key]) {
        propertyCount[key]++;
      } else {
        propertyCount[key] = 1;
      }
    }
  }

  return propertyCount;
}

const resTwo = countPropertyOccurrences(obj);
console.log(result);
