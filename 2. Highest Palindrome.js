const stringInput = "3943";
const totalReplace = 1;

const polindrome = (
  originInput, // keep save origin input value for reverse
  originReplacement, // keep save origin total replacement for reverse
  replacementTmp, // replacement temp for decrement
  currentIndex, // index position of string to compare polindrome
  polindroms, // polindroms temporary
  reverse // flag if it's reverse or not
) => {
  if (!polindroms[polindroms.length - 1]) {
    polindroms.push(originInput);
  }

  let value = polindroms[polindroms.length - 1];

  const valueReverse = value.split("").reverse().join("");

  if (value === valueReverse) {
    if (reverse) {
      console.log("");
      console.log("Polindroms: ", polindroms);
      return polindroms.length === 1
        ? polindroms
        : Number(polindroms[0]) > Number(polindroms[1])
        ? polindroms[0]
        : polindroms[1];
    } else {
      const reverseOriginInput = originInput.split("").reverse().join("");
      polindroms.push(reverseOriginInput);
      return polindrome(
        reverseOriginInput,
        originReplacement,
        originReplacement,
        0,
        polindroms,
        true
      );
    }
  } else if (replacementTmp === 0) {
    return -1;
  } else {
    if (originInput[currentIndex] !== valueReverse[currentIndex]) {
      replacementTmp--;
      const replaceValue = valueReverse[currentIndex];

      value =
        value.substring(0, currentIndex) +
        replaceValue +
        value.substring(currentIndex + 1, value.length);

      polindroms[polindroms.length - 1] = value;

      currentIndex++;

      return polindrome(
        originInput,
        originReplacement,
        replacementTmp,
        currentIndex,
        polindroms,
        reverse
      );
    } else {
      currentIndex++;
      return polindrome(
        originInput,
        originReplacement,
        replacementTmp,
        currentIndex,
        polindroms,
        reverse
      );
    }
  }
};

const result = polindrome(
  stringInput,
  totalReplace,
  totalReplace,
  0,
  [],
  false
);

console.log("Input String: ", stringInput); // 3943
console.log("Total Replacement: ", totalReplace); // 1
console.log("Final Output: ", result); // 3993
console.log("");
