let getEven = require("./get-even-numbers");
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

test("Get Even Number",function(){
    let input = [22, 13, 73, 82, 4];
    let expected = [22,82,4];
    expect(expected).toEqual(getEven(input))
})