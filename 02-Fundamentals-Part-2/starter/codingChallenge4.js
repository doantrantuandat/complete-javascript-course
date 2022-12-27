const calTipsFromBills = (bills) => {
  let tips = [];
  let totals = [];
  bills.forEach((element) => {
    let tip =
      element >= 50 && element <= 300
        ? element * (15 / 100)
        : element * (20 / 100);
    tips.push(tip);
    totals.push(element + tip);
  });
  return {
    tips: tips,
    totals: totals,
  };
};

//testing
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = calTipsFromBills(bills).tips;
const totals = calTipsFromBills(bills).totals;
// const totals = total(bills, tips);

for (let i = 0; i < bills.length; i++) {
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
  );
}

//bonus
const calcAverage = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};
const averageSum = calcAverage(totals);
console.log(`Average: ${averageSum}`);
