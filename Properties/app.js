const House = require("./Util/house");

const myHouse = new House("125 Mills Place", true, true);

myHouse.addToPets(["Kimba", "Carl"]);
myHouse.addToPets(["Fred Fuck"]);

console.log(myHouse);
