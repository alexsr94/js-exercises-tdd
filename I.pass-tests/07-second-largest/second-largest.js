const secondLargest = (array) => {
  array= array.sort((a,b)=>{return b-a})
  return array[1];
};
module.exports = secondLargest;
