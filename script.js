const result = document.querySelector('.result')
const hunmanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let hunmanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'

}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());

}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

playTheGame = (human, machine) => {

    console.log('Human: ' + human + " Machine: " + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        result.innerHTML = "Você ganhou!"
        hunmanScoreNumber++
        hunmanScore.innerHTML = hunmanScoreNumber
        
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }

}
