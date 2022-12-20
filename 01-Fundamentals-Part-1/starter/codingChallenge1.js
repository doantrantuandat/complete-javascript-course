function BMI(mass, height) {
  return mass / height ** 2;
}

let markMass1 = 78,
  markHeight1 = 1.69,
  markMass2 = 95,
  markHeight2 = 1.88;
let johnMass1 = 92,
  johnHeight1 = 1.95,
  johnMass2 = 85,
  johnHeight2 = 1.76;

let markBmi1 = BMI(markMass1, markHeight1);
let markBmi2 = BMI(markMass2, markHeight2);
let johnBmi1 = BMI(johnMass1, johnHeight1);
let johnBmi2 = BMI(johnMass2, johnHeight2);

console.log(markBmi1, markBmi2, johnBmi1, johnBmi2);

function compareBMI(markBmi, johnBmi) {
  if (markBmi > johnBmi) {
    console.log(
      `Mark's BMI ${markBmi.toFixed(2)} is higher than John's ${johnBmi.toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `John's BMI ${johnBmi.toFixed(2)} is higher than Mark's ${markBmi.toFixed(
        2
      )}`
    );
  }
}

compareBMI(markBmi1, johnBmi1);
compareBMI(markBmi2, johnBmi2);
