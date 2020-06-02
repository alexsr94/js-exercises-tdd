function formatCities(capitals, callback) {
  return capitals.map((x) => callback(x));
}
module.exports = formatCities;
