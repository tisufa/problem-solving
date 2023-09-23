const brackets = "{[()]}";

const resolve = (str) => {
  const openBracket = "{[(";
  const openCloseBracket = ["{}", "[]", "()"];
  const openBrackets = [];

  // remove all space and create erray string
  const strs = str.replace(/ /g, "").split("");

  let isValid = true;

  for (let i = 0; i < strs.length; i++) {
    const bracket = strs[i];
    if (openBracket.includes(bracket)) {
      openBrackets.push(bracket);
    } else {
      const isOpenBracket = openBracket.includes(bracket);

      if (!isOpenBracket && openBrackets.length === 0) {
        isValid = false;
        break;
      }

      const lastOpenBracket = openBrackets[openBrackets.length - 1];

      if (openCloseBracket.includes(lastOpenBracket + bracket)) {
        openBrackets.pop();
      }
    }
  }
  return isValid && openBrackets.length === 0 ? "Yes" : "No";
};

const result = resolve(brackets);

console.log("Input String: ", brackets); // {[()]}
console.log("Final Output: ", result); // Yes
