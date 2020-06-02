// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strinconst
const average = (array) => {
  array = array.filter((x) => (typeof x) === "number");
  return (
    array.reduce((a, b) => 
      a + b
    ) / array.length
  );
};
module.exports=average;