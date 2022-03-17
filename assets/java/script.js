const startButton = document.getElementById('start-btn');

const nextButton = document.getElementById('next-btn');

const finalizeButton = document.getElementById('finalize-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');

const answerButtonsElement = document.getElementById('answer-buttons');

var timerElement = document.getElementById('timer-count');

var correctCount = 0;

var timer;

var timerCount;

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

finalizeButton.addEventListener('click', finalize)

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    timerCount= 30;
    setNextQuestion()
    startTimer()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function startTimer() {

    timer= setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            nextButton.classList.add('hide');
            finalizeButton.classList.remove('hide');
        }
    }, 1000);

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    if (selectedButton = correct) {
        correctCount++
    } else {
        timerCount--;
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        clearInterval(timer);
        finalizeButton.classList.remove('hide')
    }
    console.log(correctCount);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else element.classList.add('wrong')
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function finalize() {
    localStorage.setItem("correctCount", correctCount);
}

const questions = [
    {
        question: 'A Prompt returns a:',
        answers: [
            { text: 'String', correct: true },
            { text: 'Number', correct: false },
            { text: 'Integer', correct: false },
            { text: 'Boolean', correct: false }
        ]
    },

    {
        question: 'An Alert is part of:',
        answers: [
            { text: 'Window object', correct: true },
            { text: 'Manually typed object', correct: false },
            { text: 'Super massive object', correct: false },
            { text: 'The greater universe', correct: false }
        ]
    },

    {
        question: 'A loop that leads to a desired output is called:',
        answers: [
            { text: 'A desired output Loop', correct: false },
            { text: 'Logical functionality Loop', correct: false },
            { text: 'Fruity Loops', correct: false },
            { text: 'For Loop', correct: true }
        ]
    },

    {
        question: "'The term 'this' refers to:",
        answers: [
            { text: 'The series of functions in the script', correct: false },
            { text: 'The currently selected object', correct: true },
            { text: 'All local variables', correct: false },
            { text: 'All global variables', correct: false }
        ]
    },

    {
        question: 'When a variable is local, it:',
        answers: [
            { text: 'Mocks the people feeding bin chickens', correct: false },
            { text: 'Can be applied to all functions', correct: false },
            { text: 'Knows the best cafes', correct: false },
            { text: 'Is only applied to the current function', correct: true }
        ]
    },

    {
        question: 'When a variable is global, it:',
        answers: [
            { text: 'Can be applied to all functions', correct: true },
            { text: 'Has a lot of stamps on its passport', correct: false },
            { text: 'Is very aware of the java environmental crisis', correct: false },
            { text: 'Is only applied to the current function', correct: false }
        ]
    },

    {
        question: 'When a .value is applied, the string turns in to:',
        answers: [
            { text: 'A stock commodity', correct: false },
            { text: 'A barterable form of FIAT', correct: false },
            { text: 'A number', correct: true },
            { text: 'A function', correct: false }
        ]
    },

    {
        question: 'What are the values placed inside the parenthesis of a function called?',
        answers: [
            { text: 'Parenthesis Bros', correct: false },
            { text: 'Peas in a Pod', correct: false },
            { text: 'A domestic dispute', correct: false },
            { text: 'An argument', correct: true }
        ]
    },

    {
        question: 'A series of values of the same type in a single container is called:',
        answers: [
            { text: 'A value bank', correct: false },
            { text: 'An array', correct: true },
            { text: 'A glass of value', correct: false },
            { text: 'A function', correct: false }
        ]
    },

    {
        question: 'Adding a reaction to a user input is done by giving an:',
        answers: [
            { text: 'Event watcher', correct: false },
            { text: 'Event feeler', correct: false },
            { text: 'Event listener', correct: true },
            { text: 'Event taster', correct: false }
        ]
    }
]