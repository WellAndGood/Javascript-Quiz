
startButton = document.querySelector("#start-Button")
scoresButton = document.querySelector("#high-scores")

startButton.addEventListener("click", function() {
    return window.location.assign('game/game.html')
})

scoresButton.addEventListener("click", function() {
    return window.location.assign('scores/scores.html')
})



