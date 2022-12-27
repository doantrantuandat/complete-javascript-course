const Mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();

if (John.bmi > Mark.bmi) {
  console.log(
    `${John.name}'s BMI (${John.bmi.toFixed(2)}) is higher than ${
      Mark.name
    }'s BMI (${Mark.bmi.toFixed(2)})!`
  );
} else {
  console.log(
    `${Mark.name}'s BMI (${Mark.bmi.toFixed(2)}) is higher than ${
      John.name
    }'s BMI (${John.bmi.toFixed(2)})!`
  );
}
