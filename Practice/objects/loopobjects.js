let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      age: 50,
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      age: 57,
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      age: 35,
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      age: 40,
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].age}`
  );
}
