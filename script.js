
const gameStatusDiv = document.querySelector("#game-status-div")

const spanSP = document.querySelector("#span-SP")
const spanPC = document.querySelector("#span-PC")

let yourScoreNumber = 0
let aiScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

function clickButton(yourChoice) {
    
    result(yourChoice, randomizeNumber())

}

function randomizeNumber() {
    const aiChoice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    let randomNumber = Math.floor(Math. random() * 3)
    
    return aiChoice[randomNumber]
}

function result(you, ai) {

    console.log(`Você jogou: ${you}`)
    console.log(`O computador jogou: ${ai}`)
    const resultSpan = document.querySelector("#result-span")

    if (you === ai) {

        gameStatusDiv.style.display = "flex";
        resultSpan.innerText = "EMPATOU";
        resultSpan.style.color = "#ffdd00"

    }

    else if ((you == GAME_OPTIONS.PAPER && ai == GAME_OPTIONS.ROCK) || (you == GAME_OPTIONS.SCISSORS && ai == GAME_OPTIONS.PAPER) || (you == GAME_OPTIONS.ROCK && ai == GAME_OPTIONS.SCISSORS)) {

        yourScoreNumber++
        spanSP.innerText = yourScoreNumber

        gameStatusDiv.style.display = "flex";
        resultSpan.innerText = "GANHOU";
        resultSpan.style.color = "#1aff00"

    }

    else {

        aiScoreNumber++
        spanPC.innerText = aiScoreNumber

        gameStatusDiv.style.display = "flex";
        resultSpan.innerText = "PERDEU";
        resultSpan.style.color = "#ff0000"
    
    }

}

function closeResults() {
    gameStatusDiv.style.display = "none"
}