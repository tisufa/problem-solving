const stringInput = "bbccc";

const queries = [1, 3, 9, 8];

const resolveStringNumber = (str) => {
  return str
    .split("")
    .map((str) => str.charCodeAt() - 96)
    .reduce((total, value) => total + value);
};

const resolveStrings = (str) => {
  if (!str) return [];
  const stringArray = str.split("");
  return stringArray.map((value, index) => {
    if (index === 0) return value;
    let start = index;
    let result = value;
    while (start > 0) {
      const previousValue = stringArray[start - 1];
      if (value === previousValue) {
        result = result + previousValue;
        start--;
      } else {
        start = 0;
      }
    }
    return result;
  });
};

const resolveQuery = (query, numbers) => {
  return numbers.findIndex((number) => number === query) === -1 ? "No" : "Yes";
};

console.log("Input String: ", stringInput); // bbccc
console.log("Queries: ", queries); // [1,3,9,8]
const strings = resolveStrings(stringInput);
console.log("Output String: ", strings); // ['b','bb','c','cc','ccc']
const numbers = strings.map((string) => resolveStringNumber(string));
console.log("Output Number: ", numbers); // [ 2, 4, 3, 6, 9 ]
const result = queries.map((query) => resolveQuery(query, numbers));
console.log("Final Output: ", result);
