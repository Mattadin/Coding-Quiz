
function applyScore() {
    var userName = prompt("Please enter username");
    var finalScore = document.createElement("li");
    var correctCount = localStorage.getItem("correctCount");
    var score= userName + " " + correctCount;
    document.body.appendChild(finalScore);
    finalScore.textContent = userName + " " + correctCount;
    localStorage.setItem("score", score)
}

applyScore();