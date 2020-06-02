// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
let largestNumber = require("./largest-number");

test("Largest Number",function(){
    let input = [3,21,88,4,36];
    let expected=88;
    expect(expected).toEqual(largestNumber(input));

})