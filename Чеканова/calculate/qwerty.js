const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const num3Input = document.getElementById('num3')
const num4Input = document.getElementById('num4')
const num5Input = document.getElementById('num5')
const clakButton = document.getElementById('clak')
const clak1Button = document.getElementById('clak1')
const result1Paragraph = document.getElementById('result1')
const result2Paragraph = document.getElementById('result2')

clakButton.addEventListener( "click", () => {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    if (isNaN(num1) || isNaN(num2)) {
        result1Paragraph.textContent = 'Результат: Пожалуйста введите числа'
    } else {
        const sum = num1+num2
        result1Paragraph.textContent = 'Результат:' + sum
    }
})
clak1Button.addEventListener( "click", () => {
    const num3 = parseFloat(num3Input.value)
    const num4 = parseFloat(num4Input.value)
    const num5 = parseFloat(num5Input.value)    
    if (isNaN(num3) || isNaN(num4) || isNaN(5)) {
        result2Paragraph.textContent = 'Результат: Пожалуйста введите числа'
    } else {
        const pro = num3*num4*num5
        result2Paragraph.textContent = 'Результат:' + pro
    }
})