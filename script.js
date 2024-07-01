const questions = [
    {
        question: "Kurā gadā sākās Pirmais pasaules karš?",
        answers: ["1912", "1914", "1916", "1918"],
        correct: 1
    },
    {
        question: "Kurš bija pirmais cilvēks, kas nolaidās uz Mēness?",
        answers: ["Jurijs Gagarins", "Neil Armstrongs", "Buzz Aldrin", "Maikls Kolinss"],
        correct: 1
    },
    {
        question: "Kura civilizācija izveidoja pirmo rakstību?",
        answers: ["Romieši", "Ēģiptieši", "Sumēri", "Grieķi"],
        correct: 2
    },
    {
        question: "Kurā gadā notika Amerikas neatkarības deklarācijas parakstīšana?",
        answers: ["1776", "1783", "1801", "1812"],
        correct: 0
    },
    {
        question: "Kurš bija pirmais Romas imperators?",
        answers: ["Jūlijs Cēzars", "Augusts", "Nerons", "Tiberijs"],
        correct: 1
    },
    {
        question: "Kura valsts uzsāka Otro pasaules karu, iebrūkot Polijā?",
        answers: ["Itālija", "Japāna", "Vācija", "Krievija"],
        correct: 2
    },
    {
        question: "Kurā gadā sākās Lielā franču revolūcija?",
        answers: ["1776", "1789", "1793", "1815"],
        correct: 1
    },
    {
        question: "Kurš vadīja Lielbritāniju Otrā pasaules kara laikā?",
        answers: ["Nevils Čemberlens", "Vinstons Čērčils", "Klements Etlijs", "Edvards Hīts"],
        correct: 1
    },
    {
        question: "Kurš bija slavenais Grieķijas filozofs, kas bija Aleksandra Lielā skolotājs?",
        answers: ["Platons", "Sokrats", "Aristotelis", "Homērs"],
        correct: 2
    },
    {
        question: "Kura valsts uzbūvēja Lielo Ķīnas mūri?",
        answers: ["Japāna", "Indija", "Ķīna", "Mongolija"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz');
    const nextButton = document.getElementById('next-button');
    nextButton.disabled = true;

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <ul class="answers">
                ${currentQuestion.answers.map((answer, index) => `
                    <li><button onclick="selectAnswer(${index})">${answer}</button></li>
                `).join('')}
            </ul>
        `;
    } else {
        questionElement.innerHTML = `
            <div class="result">Jūs pabeidzāt viktorīnu! Jūsu rezultāts ir ${score} no ${questions.length}.</div>
            <button onclick="resetQuiz()">Sākt no jauna</button>
        `;
    }
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');

    if (index === currentQuestion.correct) {
        score++;
        resultElement.innerHTML = "Pareizi!";
    } else {
        resultElement.innerHTML = "Nepareizi!";
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('result').innerHTML = '';
    loadQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
