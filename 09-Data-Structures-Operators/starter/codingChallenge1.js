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
const [players1, players2] = [...game.players];
console.log(players1);
console.log(players2);

//2
const [gkTeam1, ...fieldPlayersTeam1] = players1; //destructuring arrays
const [gkTeam2, ...fieldPlayersTeam2] = players2;
console.log(gkTeam1);
console.log(fieldPlayersTeam1);
console.log(gkTeam2);
console.log(fieldPlayersTeam2);

//3
const allPlayers = [...fieldPlayersTeam1, ...fieldPlayersTeam2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
function printGoals(...players) {
  players.forEach(element => {
    console.log(element);
  });
  console.log(`Total goals: ${players.length}`);
}

printGoals(...game.scored);

//7
team1 > team2 && console.log('Team 2 win!');
team1 < team2 && console.log('Team 1 win!');
