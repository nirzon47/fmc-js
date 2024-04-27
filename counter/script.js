const counter = document.getElementsByClassName('counter')[0]
const increaseButton = document.getElementsByClassName('increase')[0]
const decreaseButton = document.getElementsByClassName('decrease')[0]
const resetButton = document.getElementsByClassName('reset')[0]
const inputChanger = document.getElementById('input-changer')
const changeButton = document.getElementsByClassName('change')[0]

increaseButton.addEventListener('click', () => {
	counter.innerText = Number(counter.innerText) + 1
})

decreaseButton.addEventListener('click', () => {
	counter.innerText = Number(counter.innerText) - 1
})

resetButton.addEventListener('click', () => {
	counter.innerText = 0
})

inputChanger.addEventListener('input', () => {
	if (inputChanger.value > 99) {
		inputChanger.value = 99
	} else if (inputChanger.value < -99) {
		inputChanger.value = -99
	}
})

changeButton.addEventListener('click', () => {
	counter.innerText = Number(counter.innerText) + Number(inputChanger.value)
})
