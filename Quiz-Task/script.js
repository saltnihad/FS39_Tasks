const data = [
      {
        id: "1",
        title: "Çempionlar liqasını 5 dəfə qaldıran klub?",
        answers: [
          { id: "1", answer: "Liverpul" },
          { id: "2", answer: "Milan" },
          { id: "3", answer: "Barcelona", trueAnswer: true },
          { id: "4", answer: "Mançester" },
        ],
      },
      {
        id: "2",
        title: "Bu adlardan hansı Şekspir pyesinin başlığında yoxdur?",
        answers: [
          { id: "1", answer: "Darren", trueAnswer: true },
          { id: "2", answer: "Romeo" },
          { id: "3", answer: "Macbeth" },
          { id: "4", answer: "Hamlet" },
        ],
      },
      {
        id: "3",
        title: "Bu proqram cütlərindən hansı təxminən eyni xidmət növünü təklif edir?",
        answers: [
          { id: "1", answer: "Snapchat və Grubhub" },
          { id: "2", answer: "Lyft və Uber", trueAnswer: true },
          { id: "3", answer: "Whatsapp və SHAREit" },
          { id: "4", answer: "Tiktok və Spotify" },
        ],
      },
      {
        id: "4",
        title: "Kraliça Anna hansı ingilis monarxının qızı idi?",
        answers: [
          { id: "1", answer: "Henry VIII" },
          { id: "2", answer: "James II", trueAnswer: true },
          { id: "3", answer: "Viktoriya" },
          { id: "4", answer: "William I" },
        ],
      },
      {
        id: "5",
        title: "İlk teleskop neçənci ildə düzəlib?",
        answers: [
          { id: "1", answer: "1589" },
          { id: "2", answer: "1704" },
          { id: "3", answer: "1608", trueAnswer: true },
          { id: "4", answer: "1622" },
        ],
      },
    ];

 
let currentQuestion = 0;
let correctAnswers = 0;
let timer;
let timeLeft = 10;

function showQuestion() {
  clearInterval(timer);
  timeLeft = 10;

  const question = data[currentQuestion];
  document.querySelector(".question-title").textContent = question.title;
  const answersDiv = document.querySelector(".answers");
  answersDiv.innerHTML = "";

  question.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.answer;
    btn.onclick = () => checkAnswer(btn, answer.trueAnswer);
    answersDiv.appendChild(btn);
  });

  document.querySelector(".timer").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.querySelector(".timer").textContent = timeLeft;
    if (timeLeft === 0) {
  clearInterval(timer);
  revealCorrectAnswer();
  setTimeout(() => {
    showResult(); 
  }, 1000);
}
  }, 1000);
}

function checkAnswer(button, isCorrect) {
  clearInterval(timer);
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(btn => btn.classList.add("disabled"));

  if (isCorrect) {
    button.classList.add("correct");
    correctAnswers++;
  } else {
    button.classList.add("wrong");
    revealCorrectAnswer();
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < data.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

// Need explanation
function revealCorrectAnswer() {
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(btn => btn.classList.add("disabled"));
  const correctBtn = Array.from(buttons).find(btn => {
    return data[currentQuestion].answers.find(ans =>
      ans.answer === btn.textContent && ans.trueAnswer
    );
  });
  if (correctBtn) correctBtn.classList.add("correct");
}

function showResult() {
  document.querySelector(".question-box").style.display = "none";
  document.querySelector(".result").textContent = `Siz ${correctAnswers} düzgün cavab verdiniz!`;
}

showQuestion();