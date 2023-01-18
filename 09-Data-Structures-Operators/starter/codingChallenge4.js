'use strict';

/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const arr = text.toLowerCase().split('\n');
  console.log(text);
  console.log(arr);

  for (let index = 0; index < arr.length; index++) {
    const [prefix, suffix] = arr[index].trim().split('_');
    let str = prefix + suffix.replace(suffix[0], suffix[0].toUpperCase());

    str = str.padEnd(20, ' ');

    console.log(`${str}${'✅'.repeat(index + 1)}`);
  }
});
