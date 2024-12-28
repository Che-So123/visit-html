const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const clakButton = document.getElementById('clak')
const resultParagraph = document.getElementById('result')

clakButton.addEventListener( "click", () => {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = 'Результат: Пожалуйста введите числа'
    } else {
        const sum = num1+num2
        resultParagraph.textContent = 'Результат:' + sum
    }
})
