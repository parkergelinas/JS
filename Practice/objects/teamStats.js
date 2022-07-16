const team = {
  _players: [
    { firstName: "Parker", lastName: "Gelinas", age: 20 },
    { firstName: "Cade", lastName: "Irving", age: 19 },
    { firstName: "Alfie", lastName: "Duncan", age: 20 },
  ],
  _games: [
    { opponent: "Jaguars", teamPoints: 45, opponentPoints: 23 },
    { opponent: "Angels", teamPoints: 15, opponentPoints: 73 },
    { opponent: "Sharks", teamPoints: 41, opponentPoints: 53 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Apple", "Juice", 99);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);
