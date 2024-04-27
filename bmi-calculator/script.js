const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const calculateButton = document.getElementsByClassName('calculate')[0]
const result = document.getElementsByClassName('result')[0]
const resultForm = document.getElementsByClassName('bmi-form')[0]

const calculateBMI = () => {
	const weight = Number(weightInput.value)
	const height = Number(heightInput.value)

	const bmi = (weight / ((height * height) / 10000)).toFixed(2)
	result.innerText = `Your BMI is ${bmi}`
}

calculateButton.addEventListener('click', () => calculateBMI())

resultForm.addEventListener('submit', (e) => {
	e.preventDefault()
	calculateBMI()
})
