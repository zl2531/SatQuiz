var questions = [
  {
    "question": "The revolution in art has not lost its steam; it ____ on as fiercely as ever.",
    "option1": "trudges",
    "option2": "meanders",
    "option3": "edges",
    "option4": "ambles",
    "option5": "rages",
    "answer": "5"
  },
  {
    "question": "Each occupation has its own ____ ; bankers, lawyers and computer professionals, for example, all use among themselves language which outsiders have difficulty following.",
    "option1": "merits",
    "option2": "disadvantages",
    "option3": "rewards",
    "option4": "jargon",
    "option5": "problems",
    "answer": "4"
  },
  {
    "question": "____ by nature, Jones spoke very little even to his own family members.",
    "option1": "garrulous",
    "option2": "equivocal",
    "option3": "taciturn",
    "option4": "arrogant",
    "option5": "gregarious",
    "answer": "3"
  },
  {
    "question": "Many people at that time believed that spices help preserve food; however, Hall found that many marketed spices were ____ bacteria, moulds and yeasts.",
    "option1": "devoid of",
    "option2": "teeming with",
    "option3": "improved by",
    "option4": "destroyed by",
    "option5": "active against",
    "answer": "2"
  },
  {
    "question": "The two artists differed markedly in their temperaments; Palmer was reserved and courteous, Frazer ____ and boastful.",
    "option1": "phlegmatic",
    "option2": "choleric",
    "option3": "constrained",
    "option4": "tractable",
    "option5": "stoic",
    "answer": "2"
  }
];

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var opt5 = document.getElementById('opt5');
var nextButton = document.getElementById('button');
var result = document.getElementById('result');

function loadQuestion (questionIndex) {
  var q = questions(questionIndex);
  questionEl.innerText = (questionIndex + 1) + '. ' + q.question;
  opt1.innerText = q.option1;
  opt2.innerText = q.option2;
  opt3.innerText = q.option3;
  opt4.innerText = q.option4;
  opt5.innerText = q.option5;
}

function loadNextQuestion () {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption) {
    alert ('Please select your answer!');
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    socre += 20;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nextButton.innerText = 'Completed';
  }
  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    result.style.display = '';
    result.innerText = 'Your Score: ' + score;
    return;
}
loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
