const quizzes = [
  {
    title: "Sample Quiz 1",
    description: "This is the first sample quiz",
    num_of_questions: 2,
    scenarioId: 1,
    questions: [
      {
        title: "Question 1 Title",
        answerOne: "Answer 1.1",
        answerTwo: "Answer 1.2",
        answerThree: "Answer 1.3",
        answerFour: "Answer 1.4",
        quiz_Id: 1,
      },
      {
        title: "Question 2 Title",
        answerOne: "Answer 2.1",
        answerTwo: "Answer 2.2",
        answerThree: "Answer 2.3",
        answerFour: "Answer 2.4",
        quiz_Id: 1,
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  let currentQuizIndex = 0;
  let currentQuestionIndex = 0;

  function showQuestion(quizIndex, questionIndex) {
    const quiz = quizzes[quizIndex];
    const question = quiz.questions[questionIndex];

    quizContainer.innerHTML = `
      <h1>${quiz.title}</h1>
      <p>${quiz.description}</p>
      <div class="question-container">
        <h3>${question.title}</h3>
        <ul>
          <li>${question.answerOne}</li>
          <li>${question.answerTwo}</li>
          <li>${question.answerThree}</li>
          <li>${question.answerFour}</li>
        </ul>
        ${
          questionIndex < quiz.questions.length - 1
            ? '<button onclick="showNextQuestion()">Next</button>'
            : ""
        }
      </div>
    `;
  }

  window.showNextQuestion = function () {
    if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuizIndex, currentQuestionIndex);
    }
  };

  showQuestion(currentQuizIndex, currentQuestionIndex);
});
