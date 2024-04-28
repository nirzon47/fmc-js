const rollButton = document.getElementsByClassName('roll')[0]
const result = document.getElementsByClassName('result')[0]
const dice1 = document.getElementsByClassName('dice')[0]
const dice2 = document.getElementsByClassName('dice')[1]
const dice3 = document.getElementsByClassName('dice')[2]
const dice4 = document.getElementsByClassName('dice')[3]

const rollDices = () => {
	result.innerText = 'Rolling...'
	const interval = setInterval(() => {
		const randomNumber1 = Math.floor(Math.random() * 6) + 1
		const randomNumber2 = Math.floor(Math.random() * 6) + 1
		const randomNumber3 = Math.floor(Math.random() * 6) + 1
		const randomNumber4 = Math.floor(Math.random() * 6) + 1
		dice1.innerText = randomNumber1
		dice2.innerText = randomNumber2
		dice3.innerText = randomNumber3
		dice4.innerText = randomNumber4
	}, 100)

	setTimeout(() => {
		const total =
			Number(dice1.innerText) +
			Number(dice2.innerText) +
			Number(dice3.innerText) +
			Number(dice4.innerText)
		result.innerText = `Rolled: ${total}`
		clearInterval(interval)
	}, 2000)
}

rollButton.addEventListener('click', () => rollDices())
