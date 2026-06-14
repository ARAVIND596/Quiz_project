const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Transfer Markup Language",
        d: "Home Tool Markup Language",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
    },
    {
        question: "Which keyword is used to declare a variable?",
        a: "int",
        b: "let",
        c: "string",
        d: "variable",
        correct: "b"
    },
    {
        question: "Which method selects an element by ID?",
        a: "querySelector()",
        b: "getElementById()",
        c: "getElementsByClassName()",
        d: "selectElement()",
        correct: "b"
    },
    {
        question: "Which event occurs when a button is clicked?",
        a: "mouseover",
        b: "load",
        c: "click",
        d: "change",
        correct: "c"
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const submitBtn = document.getElementById("submit");
const progress = document.getElementById("progress");

loadQuestion();

function loadQuestion() {

    const q = quizData[currentQuestion];

    progress.textContent =
        `Question ${currentQuestion + 1} of ${quizData.length}`;

    question.textContent = q.question;

    optionA.textContent = q.a;
    optionB.textContent = q.b;
    optionC.textContent = q.c;
    optionD.textContent = q.d;

    const answers =
        document.querySelectorAll('input[name="answer"]');

    answers.forEach(answer => {
        answer.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const selectedAnswer =
        document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (
        selectedAnswer.value ===
        quizData[currentQuestion].correct
    ) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {

        document.querySelector(".quiz-container").innerHTML = `
            <h1 class="quiz-title">Quiz Finished 🎉</h1>
            <h2 style="text-align:center;">
                Score: ${score}/${quizData.length}
            </h2>
            <br>
            <button onclick="location.reload()">
                Restart Quiz
            </button>
        `;
    }
});