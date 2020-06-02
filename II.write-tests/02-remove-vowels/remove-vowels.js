function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function (character) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u" ||
      character === "A" ||
      character === "E" ||
      character === "I" ||
      character === "O" ||
      character === "U"
    ) {
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
