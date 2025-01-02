const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const num3Input = document.getElementById('num3')
const num4Input = document.getElementById('num4')
const num5Input = document.getElementById('num5')
const num6Input = document.getElementById('num6')
const num7Input = document.getElementById('num7')
const num8Input = document.getElementById('num8')
const clakButton = document.getElementById('clak')
const clak2Button = document.getElementById('clak2')
const clak1Button = document.getElementById('clak1')
const result1Paragraph = document.getElementById('result1')
const result2Paragraph = document.getElementById('result2')
const resultParagraph = document.getElementById('result3')

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
clak1Button.addEventListener( "click", () => {
    const num3 = parseFloat(num3Input.value)
    const num4 = parseFloat(num4Input.value)
    const num5 = parseFloat(num5Input.value)    
    if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        result1Paragraph.textContent = 'Результат: Пожалуйста введите числа'
    } else {
        const pro = num3*num4*num5
        result1Paragraph.textContent = 'Результат:' + pro
    }
})
clak2Button.addEventListener( "click", () => {
    const num6 = parseFloat(num6Input.value)
    const num7 = parseFloat(num7Input.value)
    const num8 = parseFloat(num8Input.value)    
    if (isNaN(num6) || isNaN(num7) || isNaN(num8)) {
        result2Paragraph.textContent = 'Результат: Пожалуйста введите числа'
    } else {
        const raz = num6/num7/num8
        result2Paragraph.textContent = 'Результат:' + raz
    }
})
