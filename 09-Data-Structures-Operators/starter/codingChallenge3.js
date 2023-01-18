'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
// const minutes = [...gameEvents.keys()];
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4
// console.log([...gameEvents]);
for (const [minute, event] of [...gameEvents]) {
  minute <= 45
    ? console.log(`[FIRST HALF] ${minute}: ${event}`)
    : console.log(`[SECOND HALF] ${minute}: ${event}`);
}

let a = null;

console.log(a.toString());
console.log(typeof (a + ''));
