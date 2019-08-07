new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    questionText: '',
    options: [],
    finished: false,
    questionIndex: 0,
    timeCount: 15, //15 sec
    rangeVal: 0,
    checkBool: null,
    correctAns: '',
    questions: [
      {
        question: '1. Renmoney can give you a loan of up to ...',
        choices: [
          { letter: 'A', choice: '250,000' },
          { letter: 'B', choice: '4,000,000' },
          { letter: 'C', choice: '1,000,000' }
        ],
        answer: 'B'
      },
      {
        question:
          '2. Do you need a Landed Property to obtain a loan from Renmoney',
        choices: [
          { letter: 'A', choice: 'Yes' },
          { letter: 'B', choice: 'No' }
        ],
        answer: 'B'
      },
      {
        question: '3.  How long does it take to obtain a loan from Renmoney',
        choices: [
          { letter: 'A', choice: '2 Months' },
          { letter: 'B', choice: '16 Days' },
          { letter: 'C', choice: '24 Hours' }
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
        } else {
          this.finished = true;
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
