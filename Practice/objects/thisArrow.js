////
// Shorthand Format
////
const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot1.checkEnergy();

////
// Longhand Format
////
const robot2 = {
  energyLevel: 100,
  checkEnergy: function () {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot2.checkEnergy();
