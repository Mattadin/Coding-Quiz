function getScores() {
    var loadScores = document.createElement("li");
    var score= localStorage.getItem("score");
    document.body.appendChild(loadScores);
    for (i=0; i > score.length; i++);
    loadScores.textContent = score;
    applyScore();
}


function applyScore() {
    var userName = prompt("Please enter username");
    var finalScore = document.createElement("li");
    var correctCount = localStorage.getItem("correctCount");
    var score= userName + " " + correctCount;
    document.body.appendChild(finalScore);
    finalScore.textContent = userName + " " + correctCount;
    localStorage.setItem("score", score)
}

getScores();