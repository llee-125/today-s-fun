const House = require("./Util/house");
const Apt = require("./Util/apt");

const myHouse = new House("125 Mills Place", true, true);

myHouse.addToPets(["Kimba", "Carl"]);
myHouse.addToPets(["Fred Fuck"]);

console.log(myHouse);

const myApt = new Apt("555 Lexon, 3355");

myApt.addToTenants(new personalbar("Louise"), new Person("Mike"));

console.log(myApt);
