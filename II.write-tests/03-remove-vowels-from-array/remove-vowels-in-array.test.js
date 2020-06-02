let removeVowelsFormWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function () {
  let words = ["Irina", "Etza", "Daniel"];
  let output = removeVowelsFormWords(words);

  let expected = ["rn", "tz", "Dnl"];
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
