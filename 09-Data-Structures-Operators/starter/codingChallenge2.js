'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

//2
const oddsEntries = Object.entries(game.odds);
let totalPoint = 0;
for (const [teamName, point] of oddsEntries) {
  totalPoint += point;
}
console.log(`Average: ${(totalPoint / oddsEntries.length).toFixed(2)}`);

//3
//solution 1
// const [team1, draw, team2] = Object.keys(game.odds);
// const keysTeam = [team1, draw, team2];
// console.log(keysTeam);

// for (const key of keysTeam) {
//   const name = game[key] || 'draw';
//   console.log(`Odd of victory ${name}: ${game.odds[key]}`);
// }

//solution 2
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//4
const scorers = {};

for (const item of game.scored) {
  scorers[item] ? scorers[item]++ : (scorers[item] = 1);
}
console.log(scorers);
