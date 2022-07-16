let bobsFollowers = ["Bob1", "Bob2", "Bob3", "Bob4"];
let tinasFollowers = ["Tina1", "Bob2", "Bob3"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let f = 0; f < tinasFollowers.length; f++) {
    if (bobsFollowers[i] === tinasFollowers[f]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
