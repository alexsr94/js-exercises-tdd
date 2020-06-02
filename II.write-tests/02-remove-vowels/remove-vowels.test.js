let removeVowals = require('./remove-vowels')

test("remove vowels from word", function() {
  let word= "Caledoscopico"
  let expected="Cldscpc";
  let output = removeVowals(word);
  expect(output).toEqual(expected);

  // Arrange
  // Act
  // Assert
});
