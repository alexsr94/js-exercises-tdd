const paintShop = (array, color) => {
  let newA = array.slice();
  newA[0].colour = color;
  return newA;
};
module.exports = paintShop;
