const result = document.querySelector('.result')
const hunmanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let hunmanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());

}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

playTheGame = (human, machine) => {

    console.log('Human: ' + human + " Machine: " + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
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
