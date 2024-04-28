const result = document.getElementsByClassName('result')[0]
const rollButton = document.getElementsByClassName('roll')[0]
const dice1 = document.getElementsByClassName('dice')[0]
const dice2 = document.getElementsByClassName('dice')[1]

rollButton.addEventListener('click', () => {
	const randomNumber1 = Math.floor(Math.random() * 6) + 1
	const randomNumber2 = Math.floor(Math.random() * 6) + 1
	dice1.innerText = randomNumber1
	dice2.innerText = randomNumber2

	if (randomNumber1 === randomNumber2) {
		result.innerText = 'Draw'
	} else if (randomNumber1 > randomNumber2) {
		result.innerText = 'Player 1 wins'
	} else {
		result.innerText = 'Player 2 wins'
	}
})
