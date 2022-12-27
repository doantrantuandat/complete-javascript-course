const calTipsFromBills = (bills) => {
  let tips = [];
  bills.forEach((element) => {
    tips.push(
      element >= 50 && element <= 300
        ? element * (15 / 100)
        : element * (20 / 100)
    );
  });
  return tips;
};

const total = (bills, tips) => {
  let total = [];
  for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
  }
  return total;
};

const bills = [125, 555, 44];
const tips = calTipsFromBills(bills);
const totals = total(bills, tips);

for (let i = 0; i < bills.length; i++) {
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
  );
}
