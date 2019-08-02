// select all elements
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const qImg = document.getElementById('qImg');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const counter = document.getElementById('counter');
const timeGauge = document.getElementById('timeGauge');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('scoreContainer');

// create our questions
let questions = [
  {
    question: '1. Nivea natural fairness is for which skin type?',
    imgSrc: '',
    choiceA: '<span>a</span>Dark skin',
    choiceB: '<span>b</span>Light skin',
    choiceC: '<span>c</span>All skin types',
    correct: 'C'
  },
  {
    question:
      '2. What is the main difference between Nivea crème and Nivea soft?',
    imgSrc: '',
    choiceA: '<span>a</span>Oilb',
    choiceB: '<span>b</span>Formulac',
    choiceC: '<span>c</span>Water3',
    correct: 'B'
  },
  {
    question: '3. Nivea deodorant can last for how long',
    imgSrc: 'img/js.png',
    choiceA: '<span>a</span>2hours',
    choiceB: '<span>b</span>10hours',
    choiceC: '<span>c</span>48hours',
    correct: 'C'
  },
  {
    question: '4. Nivea products are for only women',
    imgSrc: 'img/js.png',
    choiceA: '<span>a</span>True',
    choiceB: '<span>b</span>False',
    choiceC: '',
    correct: 'B'
  },
  {
    question:
      '5. Does the Nivea Black / White deodorant stain your sheet with you use it?',
    imgSrc: 'img/js.png',
    choiceA: '<span>a</span>YES',
    choiceB: '<span>b</span>NO',
    choiceC: '<!--<span>c</span>48hours-->',
    correct: 'B'
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 12; // 12s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];
  console.log(q);
  question.innerHTML = '<p>' + q.question + '</p>';
  qImg.innerHTML = '<img src=' + q.imgSrc + '>';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

// start.addEventListener("click",startQuiz);

// start quiz
function startQuiz() {
  start.style.display = 'none';
  renderQuestion();
  quiz.style.display = 'block';
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>';
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + 'px';
    count++;
    loopAns();
    new Vue({
      el: '#app',
      data: { message: '' },
      methods: {
        search: function() {
          window.location.href =
            'https://www.google.com.sg/search?q=' + this.message;
        }
      }
    });
  } else {
    count = 0;
    // change progress color to red
    // $('.choice').removeClass('correct');
    // answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

function giveAnswerFeedback(answer) {
  var answerGroup = answer
    .parent()
    .parent()
    .find('.answer');
  for (var i = 0; i < answerGroup.length; i++) {
    // disable extra clicks
    answerGroup[i].disabled = true;
    if ($(answerGroup[i]).data('correct')) {
      $(answerGroup[i])
        .parent()
        .addClass('correct');
    } else {
      $(answerGroup[i])
        .parent()
        .addClass('incorrect');
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
}
function CallNextQuestion() {
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  // alert(questions[runningQuestion].correct);
  document
    .getElementById(runningQuestion)
    .append(questions[runningQuestion].correct);
  document.getElementById(runningQuestion).style.backgroundColor = '#ffffff';
  document.getElementById(runningQuestion).style.color = '#1e2a80';
  // document.getElementById(runningQuestion).addClass("addAns");
}

// answer is Wrong
function answerIsWrong() {
  //   alert(questions[runningQuestion].correct);

  var correctAns = questions[runningQuestion].correct;

  document
    .getElementById(runningQuestion)
    .append(questions[runningQuestion].correct);
  document.getElementById(runningQuestion).style.backgroundColor = '#ffffff';
  document.getElementById(runningQuestion).style.color = '#1e2a80';
  // document.getElementById(runningQuestion).addClass("addAns");

  //   count = 0;
  setTimeout(function() {
    console.log('After 5 sec');
    CallNextQuestion();
  }, 5000);
}

// score render
function scoreRender() {
  scoreDiv.style.display = 'block';

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? 'img/5.png'
      : scorePerCent >= 60
      ? 'img/4.png'
      : scorePerCent >= 40
      ? 'img/3.png'
      : scorePerCent >= 20
      ? 'img/2.png'
      : 'img/1.png';

  // scoreDiv.innerHTML = "<img src="+ img +">";
  // scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function loopAns() {
  var ul = document.getElementById('choices');
  var items = ul.getElementsByTagName('li');
  for (var i = 0; i < items.length; ++i) {
    // do something with items[i], which is a <li> element
    console.log(items[i].id);
    if (items[i].id == correctAns) {
      $('#' + items[i].id).addClass('correct');
    }
  }
}
