'use strict';
//1.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const inputNum = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //     console.log(typeof inputNum);
    //     console.log(typeof inputNum);
    if (!isNaN(inputNum) && inputNum < this.answers.length) {
      this.answers[inputNum]++;
    } else {
      console.log(`Invalid answer!`);
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

//2.
const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

//3.

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
