const questions = [
  {
    question: "Which film marked S.S. Rajamouli's debut as a director?",
    answers: [
      { text: "Simhadri", correct: false },
      { text: "Student No.1", correct: true },
      { text: "Yamadonga", correct: false },
      { text: "Magadheera", correct: false }
    ]
  },
  {
    question: "In Baahubali:The begginning what is the birth name of prabhas's charcter?",
    answers: [
      { text: "Amarendra baahubali", correct: false },
      { text: "Mahendra baahubali", correct: false },
      { text: "Shivudu", correct: true },
      { text: "Bhallaladeva", correct: false }
    ]
  },
  {
     question: "Which Telugu movie won the National award for best feature film in telugu(2021)?",
    answers: [
      { text: "color photo", correct: true },
      { text: "jersey", correct: false },
      { text: "Pushpa", correct:false},
      { text: "Akhanda", correct: false }
    ]
  },
  {
    question: "What is the name of Thor's hammer in the Marvel cinematic universe?",
    answers: [
      { text: "Stormbreaker", correct: false },
      { text: "gungnir", correct: false },
      { text: "Excalibur", correct:false},
      { text: "Mjolnir", correct: true }
    ]
  },
  {
    question: "Who directed Inception?",
    answers: [
      { text: "Christopher Nolan", correct: true },
      { text: "James Cameron", correct: false },
      { text: "Steven Spielberg", correct: false },
      { text: "Quentin Tarantino", correct: false }
    ]
  },
  {
    question: "Which team did CSK defeat in the IPL 2018 final?",
    answers: [
      { text: "SRH", correct: true },
      { text: "MI", correct: false },
      { text: "RCB", correct: false },
      { text: "KKR", correct: false }
    ]
  },
  {
    question: "Who was the captain of CSK in IPL 2018 final?",
    answers: [
      { text: "Suresh Raina", correct: false },
      { text: "Virat kholi", correct: false },
      { text: "MS Dhoni", correct: true },
      {text: "Ravindra Jadeja",correct:false}
    ]
  },
  {
    question: "Which is the cooldest desert in the Asia?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Gobi", correct: true },
      { text: "Antarctic", correct: false },
      {text: "Thar",correct:false}
    ]
},
  {
    question: "Which state has the highest population in India?",
    answers: [
      { text: "Andhra Pradesh", correct: false },
      { text: "Uttar Pradesh", correct: true },
      { text: "Karnataka", correct: false },
      { text: "Tamil Nadu", correct: false }
    ]
  },
  { 
    question: "Which state has the highest literacy in India?",
    answers: [
      { text: "Andhra Pradesh", correct: false },
      { text: "Uttar Pradesh", correct: false},
      { text: "Karnataka", correct: false },
      { text: "Kerala", correct: true }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();
