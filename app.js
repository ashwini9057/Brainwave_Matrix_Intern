const quizCategories = {

  programming: [
    { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Hyperlinks Text Markup", "Home Tool Markup", "Hyperlinking Text"], correct: 0 },
    { question: "Which language is used for web apps?", answers: ["Java", "Python", "JavaScript", "C++"], correct: 2 },
    { question: "What does CSS stand for?", answers: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], correct: 1 },
    { question: "What is JavaScript used for?", answers: ["Styling", "Markup", "Logic & Interaction", "Database"], correct: 2 },
    { question: "What symbol is used for comments in JavaScript?", answers: ["//", "<!--", "#", "/* */"], correct: 0 },
    { question: "Which keyword declares a variable?", answers: ["var", "let", "const", "All"], correct: 3 },
    { question: "What is the output of 5 + '5' in JS?", answers: ["55", "10", "Error", "NaN"], correct: 0 },
    { question: "Which company developed JavaScript?", answers: ["Microsoft", "Netscape", "Google", "IBM"], correct: 1 }
  ],

  math: [

    { question: "What is 12 + 8?", answers: ["18", "20", "22", "24"], correct: 1 },
    { question: "What is 9 x 7?", answers: ["54", "63", "72", "81"], correct: 1 },
    { question: "What is 15 - 7?", answers: ["5", "8", "10", "12"], correct: 1 },
    { question: "What is 36 ÷ 6?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "What is 3²?", answers: ["6", "9", "12", "15"], correct: 1 },
    { question: "What is 20% of 50?", answers: ["5", "10", "15", "20"], correct: 1 },
    { question: "What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "What is π (pi) rounded to 2 decimal places?", answers: ["3.12", "3.14", "3.16", "3.18"], correct: 1 }
  ],

  gk: [

    { question: "What is the capital of Japan?", answers: ["Tokyo", "Seoul", "Beijing", "Bangkok"], correct: 0 },
    { question: "Who wrote 'Hamlet'?", answers: ["Shakespeare", "Tolstoy", "Dickens", "Hugo"], correct: 0 },
    { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { question: "Who discovered gravity?", answers: ["Einstein", "Newton", "Galileo", "Kepler"], correct: 1 },
    { question: "What is the national animal of India?", answers: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 1 },
    { question: "Which country invented pizza?", answers: ["USA", "Italy", "France", "Germany"], correct: 1 }
  ],

  chemistry: [
    
    { question: "What is the chemical formula for water?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
    { question: "What is the atomic number of carbon?", answers: ["4", "6", "8", "12"], correct: 1 },
    { question: "What gas do plants absorb?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 1 },
    { question: "What element has the symbol 'Fe'?", answers: ["Iron", "Lead", "Silver", "Gold"], correct: 0 },
    { question: "What is the pH of pure water?", answers: ["5", "7", "9", "11"], correct: 1 },
    { question: "Which gas is used in balloons?", answers: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], correct: 2 },
    { question: "What is the lightest element?", answers: ["Oxygen", "Helium", "Hydrogen", "Lithium"], correct: 2 },
    { question: "Who developed the periodic table?", answers: ["Dalton", "Bohr", "Mendeleev", "Curie"], correct: 2 }
  ]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;

  document.body.className = category + "-bg";
  document.querySelector(".dashboard").style.display = "none";
  document.querySelector(".quiz-container").style.display = "block";
  document.getElementById("quiz-title").textContent = category.toUpperCase() + " Quiz";

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= 8) {
    showResult();
    return;
  }

  const currentQuestion = quizCategories[currentCategory][currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  document.getElementById("answers").innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    document.getElementById("answers").appendChild(button);
  });

  document.getElementById("next-button").style.display = "none";
}

function checkAnswer(index) {
  const currentQuestion = quizCategories[currentCategory][currentQuestionIndex];
  const answerButtons = document.querySelectorAll(".answer-button");

  if (index === currentQuestion.correct) {
    score++;
    answerButtons[index].classList.add("correct");
  } else {
    answerButtons[index].classList.add("incorrect");
    answerButtons[currentQuestion.correct].classList.add("correct");
  }

  answerButtons.forEach(button => (button.disabled = true));
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 8) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-container").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = score;
}

function returnToDashboard() {
  document.getElementById("result").style.display = "none";
  document.querySelector(".dashboard").style.display = "block";
}
