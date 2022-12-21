"use strict";

let calcAverage = (score) => {
  let totalScore = 0;
  score.forEach((element) => {
    totalScore += element;
  });
  return totalScore / score.length;
};

let checkDoubleScore = (avarageA, avarageB) => {
  return avarageA > 2 * avarageB;
};
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins > avgKoalas && checkDoubleScore(avgDolhins, avgKoalas)) {
    console.log(`Dolphins team win!`);
  } else if (
    avgKoalas > avgDolhins &&
    checkDoubleScore(avgKoalas, avgDolhins)
  ) {
    console.log(`Koalas team win!`);
  } else {
    console.log(`No team win!`);
  }
};

// const dolphins1 = [44, 23, 71];
// const koalas1 = [65, 54, 49];

const dolphins1 = [85, 54, 41];
const koalas1 = [23, 34, 27];

checkWinner(calcAverage(dolphins1), calcAverage(koalas1));
