let greetPeople= require('./greet-people');
test("print list of names prefixed with Hello", function() {
  const people =["Irina", "Alexei", "Emma"];
  let expected= "Hello IrinaAlexeiEmma";
  let output = greetPeople(people);


  expect(output).toEqual(expected);



  // Arrange
  // Act
  // Assert
});
