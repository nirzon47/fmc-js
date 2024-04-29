const input = document.getElementById('file')
const output = document.getElementsByClassName('output')[0]

input.addEventListener('change', () => {
	const file = input.files[0]
	output.innerText = file.name
})

// const form = document.getElementsByClassName('guess-form')[0]
// const feedback = document.getElementsByClassName('feedback')[0]
// const guessInput = document.getElementById('guess')
// const guessButton = document.getElementsByClassName('guess')[0]
// const resetButton = document.getElementsByClassName('reset')[0]
// const lastGuess = document.getElementsByClassName('last-guess')[0]

// let randomNumber = Math.floor(Math.random() * 100) + 1

// form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	game()
// })

// resetButton.addEventListener('click', () => {
// 	feedback.innerText = ''
// 	lastGuess.innerText = ''
// 	guessInput.value = ''
// 	guessInput.disabled = false
// 	guessButton.disabled = false
// 	guessInput.focus()
// 	randomNumber = Math.floor(Math.random() * 100) + 1
// })

// const game = () => {
// 	const guess = Number(guessInput.value)
// 	if (guess < 1 || guess > 100) {
// 		feedback.innerText = 'Number must be between 1 and 100'
// 	} else if (guess === randomNumber) {
// 		feedback.innerText = 'Correct! You win!'
// 		lastGuess.innerText = ''
// 		guessButton.disabled = true
// 		guessInput.disabled = true
// 		return
// 	} else if (guess > randomNumber) {
// 		feedback.innerText = 'Go lower!'
// 	} else {
// 		feedback.innerText = 'Go higher!'
// 	}

// 	lastGuess.innerText = `Last guess: ${guess}`
// }
