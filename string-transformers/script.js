const input = document.getElementById('string')
const result = document.getElementsByClassName('result')[0]
const camelCase = document.getElementsByClassName('result-item')[0]
const pascalCase = document.getElementsByClassName('result-item')[1]

input.addEventListener('input', () => {
	handleInputChange()
})

const handleInputChange = () => {
	const string = input.value

	changeCamelCase(string)
	changePascalCase(string)
}

const changeCamelCase = (string) => {
	if (string === '') {
		camelCase.innerText = ''
		return
	}

	let camelCaseString = string
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join('')

	camelCaseString = camelCaseString[0].toLowerCase() + camelCaseString.slice(1)

	camelCase.innerText = camelCaseString
}

const changePascalCase = (string) => {
	if (string === '') {
		pascalCase.innerText = ''
		return
	}

	let pascalCaseString = string
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join('')

	pascalCase.innerText = pascalCaseString
}
