const sales = (OBJ) => {
  let totals = {
    Ford: 0,
    Honda: 0,
    "Land Rover": 0,
    Toyota: 0,
  };
  for (i = 0; i < OBJ.length; i++) {
    switch (OBJ[i].make) {
      case "Ford":
        totals.Ford += OBJ[i].price;
        break;
      case "Honda":
        totals.Honda += OBJ[i].price;
        break;
      case "Land Rover":
        totals["Land Rover"] += OBJ[i].price;
        break;
      case "Toyota":
        totals.Toyota += OBJ[i].price;
        break;
      default:
        console.log("error");
    }
  }
  return totals;
};
module.exports = sales;
