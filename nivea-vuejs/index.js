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
        question: '1. Nivea natural fairness is for which skin type?',
        choices: [
          { letter: 'A', choice: 'Dark skin' },
          { letter: 'B', choice: 'Light skin' },
          { letter: 'C', choice: 'Brown skin' },
          { letter: 'D', choice: 'All skin types' }
        ],
        answer: 'A'
      },
      {
        question:
          '2. What is the main difference between Nivea crème and Nivea soft?',
        choices: [
          { letter: 'A', choice: 'Oilb' },
          { letter: 'B', choice: 'Formulac' },
          { letter: 'C', choice: 'Water3' },
          { letter: 'D', choice: 'Syck 1' }
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
        this.anotherQuestion();
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
      var count = this.questionIndex + 1;
      console.log(this.questions[count].answer);
      this.questionText = this.questions[count].question;
      this.options = this.questions[count].choices;
      this.correctAns = this.questions[count].answer;
    }
  }
});
