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
        question:
          '1. What’s the short code for transferring funds with Stanbic IBTC',
        choices: [
          { letter: 'A', choice: '*919#' },
          { letter: 'B', choice: '*909#' },
          { letter: 'C', choice: '*966#' }
        ],
        answer: 'A'
      },
      {
        question:
          '2. You can use the same login details on your internet banking for your mobile apps?',
        choices: [
          { letter: 'A', choice: 'True' },
          { letter: 'B', choice: 'False' }
        ],
        answer: 'B'
      },
      {
        question: '3.  Stanbic IBTC supports SME',
        choices: [
          { letter: 'A', choice: 'Yes' },
          { letter: 'B', choice: 'No' }
        ],
        answer: 'A'
      },
      {
        question: '4. Which of these things can you do with your *909#',
        choices: [
          { letter: 'A', choice: 'Bill Payment' },
          { letter: 'B', choice: 'Airtime purchase' },
          { letter: 'C', choice: 'Money Transfer' }
        ],
        answer: 'B'
      },
      {
        question: '5. *909# CAN not be used in which of these states',
        choices: [
          { letter: 'A', choice: 'Lagos' },
          { letter: 'B', choice: 'Abuja' },
          { letter: 'C', choice: 'Port-Harcourt' },
          { letter: 'D', choice: 'None' }
        ],
        answer: 'B'
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
          this.setCounter();
          this.anotherQuestion();
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
