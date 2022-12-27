"use strict";

const printForecast = (arr) => {
  let ellipsis = "...";
  const celciusChar = "\xB0C";
  let forecastedFinal = "";
  forecastedFinal += ellipsis;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    let forecastedString = ` ${element}${celciusChar} in ${
      index + 1
    } days ${ellipsis}`;
    forecastedFinal += forecastedString;
  }

  return forecastedFinal;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));
