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
          { letter: 'C', choice: 'All skin types' }
        ],
        answer: 'C'
      },
      {
        question:
          '2. What is the main difference between Nivea crème and Nivea soft?',
        choices: [
          { letter: 'A', choice: 'Oil' },
          { letter: 'B', choice: 'Formula' },
          { letter: 'C', choice: 'Water' }
        ],
        answer: 'B'
      },
      {
        question: '3. Nivea deodorant can last for how long',
        choices: [
          { letter: 'A', choice: '2hours' },
          { letter: 'B', choice: '10hours' },
          { letter: 'C', choice: '48hours' }
        ],
        answer: 'C'
      },
      {
        question: '4. Nivea products are for only women',
        choices: [
          { letter: 'A', choice: 'True' },
          { letter: 'B', choice: 'False' }
        ],
        answer: 'B'
      },
      {
        question:
          '5. Does the Nivea Black / White deodorant stain your sheet with you use it?',
        choices: [
          { letter: 'A', choice: 'Yes' },
          { letter: 'B', choice: 'No' }
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

      // Answer not working with SetTimeout Yet
      // setTimeout(() => {
      //   if (validAns == this.correctAns) {
      //     console.log(validAns);
      //     return this.correctAns;
      //   } else {
      //   }
      // }, 5000);
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
