new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    questionText: '',
    options: [],
    questionIndex: 0,
    timeCount: 15, //15 sec
    rangeVal: 0,
    checkBool: null,
    correctAns: '',
    questions: [
      {
        question: '1. Mastercard expiration date usually consist of…',
        choices: [
          { letter: 'A', choice: 'Month and year only' },
          { letter: 'B', choice: 'Date and month only' },
          { letter: 'C', choice: 'Year only' }
        ],
        answer: 'A'
      },
      {
        question: '2. What are the two primary colours in master card logo?',
        choices: [
          { letter: 'A', choice: 'Red and orange' },
          { letter: 'B', choice: 'Red and yellow' },
          { letter: 'C', choice: 'Yellow and orange' }
        ],
        answer: 'B'
      },
      {
        question:
          '3. Can you use your Mastercard whenever you travel out of the country anywhere in the world?',
        choices: [
          { letter: 'A', choice: 'Yes' },
          { letter: 'B', choice: 'No' }
        ],
        answer: 'A'
      },
      {
        question:
          '4. Do you earn a loyalty point each time you pay with your master card?',
        choices: [
          { letter: 'A', choice: 'Yes' },
          { letter: 'B', choice: 'No' }
        ],
        answer: 'A'
      },
      {
        question: '5. The Mastercard comes in which of these',
        choices: [
          { letter: 'A', choice: 'Savings' },
          { letter: 'B', choice: 'Credit' },
          { letter: 'C', choice: 'All' },
          { letter: 'D', choice: 'None' }
        ],
        answer: 'C'
      }
    ]
  },
  computed: {
    rangeIncr: function() {
      return this.rangeVal + '%';
    }
  },
  mounted() {
    this.assignData();
    this.setCounter();
  },
  methods: {
    assignData: function() {
      this.questionText = this.questions[this.questionIndex].question;
      this.options = this.questions[this.questionIndex].choices;
      this.correctAns = this.questions[this.questionIndex].answer;
    },
    setCounter: function() {
      if (this.timeCount > 0) {
        setTimeout(() => {
          this.timeCount -= 1;
          this.rangeVal += 6.66666666667;
          this.setCounter();
        }, 1000);
      } else {
        this.rangeVal = 0;
        this.timeCount = 15;
        if (this.questionIndex < this.questions.length - 1) {
          setTimeout(() => {
            this.setCounter();
            this.anotherQuestion();
          }, 5000);
        }
      }
    },
    checkAnswer: function(validAns) {
      if (validAns == this.correctAns) {
        console.log(validAns);
        return this.correctAns;
      } else {
      }

      //   Answer not working with SetTimeout Yet
      //   setTimeout(() => {
      //     if (validAns == this.correctAns) {
      //       console.log(validAns);
      //       return this.correctAns;
      //     } else {
      //     }
      //   }, 5000);
    },
    anotherQuestion: function() {
      this.questionIndex++;
      console.log(this.questionIndex);
      this.questionText = this.questions[this.questionIndex].question;
      this.options = this.questions[this.questionIndex].choices;
      this.correctAns = this.questions[this.questionIndex].answer;
    }
  }
});
