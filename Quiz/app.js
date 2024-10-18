let questions = [
    {
        ques: "What is HTML",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Language",
        c: "Programming Language",
        d: "Cascading Style Sheet",
        correct: "a",
    },
    {
        ques: "What is CSS",
        a: "A Programming Language",
        b: "Hyper Text Markup Language",
        c: "JavaScript Framework",
        d: "Cascading Style Sheet",
        correct: "d",
    },
    {
        ques: "What is JS",
        a: "Markup Language",
        b: "Hyper Text",
        c: "Coding Language",
        d: "Cascading Style Sheet",
        correct: "b",
    },
];

let question = document.querySelector(".question");
let optionInputs = document.querySelectorAll(".options");
const submitBtn = document.querySelector("#btn");

let index = 0;
let total = questions.length;
let correct = 0;
let incorrect = 0;

function loadQuestion() {
    reset();
    if (index == total) {
        return endQuiz();
    }
    const data = questions[index];
    question.innerText = `${index + 1}: ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

submitBtn.addEventListener("click", () => {
    submitQuiz();
});

function submitQuiz() {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
}

function getAnswer() {
    let answer;
    optionInputs.forEach((option) => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

function reset() {
    optionInputs.forEach((option) => {
        option.checked = false;
    });
}

function endQuiz() {
    let container = document.querySelector(".quiz-container");
    container.setAttribute(
        "style",
        "padding:1rem; display:flex; align-items:center; justify-content:center;"
    );
    container.innerHTML = `<h1 style="text-align:center">Your Quiz Ended, Thank You!</h1>
    <br/>
    <h3>Your score was:</h3>
    <br/>
    <p>Correct: ${correct}, Incorrect: ${incorrect}</p>
    `;
}

loadQuestion();
