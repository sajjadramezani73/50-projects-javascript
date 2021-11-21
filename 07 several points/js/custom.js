const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
    let sumPoint = 0;
    const arrEnterText = input.value.split('')

    arrEnterText.forEach(i => {
        if (obj.hasOwnProperty(i.toString())) {
            sumPoint += Number(obj[i.toString()])
        }

    })

    result.textContent = sumPoint
})