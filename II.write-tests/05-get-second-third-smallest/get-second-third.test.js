// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
let getSecondThird = require("./get-second-third");

test("Get second and third smallest from an array", function () {
  let input = [90, 5, 11, 8, 6];
  let expected = [6, 8];
  let arrayBefore = [90, 5, 11, 8, 6];

  expect(expected).toEqual(getSecondThird(input));
  expect(input).toEqual(arrayBefore);
});
