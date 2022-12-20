const dolphins1 = [96, 108, 89];
const koalas1 = [88, 91, 110];
const minimumScore = 100;

const dolphinsBonus1 = [97, 112, 101];
const koalasBonus1 = [109, 95, 123];

const dolphinsBonus2 = [97, 112, 101];
const koalasBonus2 = [109, 95, 106];

function calculateAverageScore(score) {
  let totalScore = 0;
  score.forEach((element) => {
    totalScore += element;
  });
  return totalScore / score.length;
}

//data1
// let averageDolphin1 = calculateAverageScore(dolphins1);
// let averageKoalas1 = calculateAverageScore(koalas1);

//bonus 1
// let averageDolphin1 = calculateAverageScore(dolphinsBonus1);
// let averageKoalas1 = calculateAverageScore(koalasBonus1);

//bonus 2
let averageDolphin1 = calculateAverageScore(dolphinsBonus2);
let averageKoalas1 = calculateAverageScore(koalasBonus2);

if (averageDolphin1 > averageKoalas1 && averageDolphin1 >= minimumScore) {
  console.log(averageDolphin1, averageKoalas1, `Dolphins team win the trophy!`);
} else if (averageKoalas1 > averageDolphin1 && averageKoalas1 >= minimumScore) {
  console.log(averageDolphin1, averageKoalas1, `Koalas team win the trophy!`);
} else if (
  averageKoalas1 === averageDolphin1 &&
  averageDolphin1 >= minimumScore &&
  averageKoalas1 >= minimumScore
) {
  console.log(averageDolphin1, averageKoalas1, `Draw!`);
} else {
  console.log(averageDolphin1, averageKoalas1, `No team wins the trophy`);
}
