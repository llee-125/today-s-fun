const Property = require("./property");

class Apt extends Property {
  constructor(address, laundry) {
    super(address);
    this.laundry = laundry;
  }
}

module.exports = Apt;
