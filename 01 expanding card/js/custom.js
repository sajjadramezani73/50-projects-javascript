const divElements = document.querySelectorAll('.box')

divElements.forEach((element) => {
    element.addEventListener('click', () => {
        console.log(`${element.parentElement.classList} = ${element.innerHTML}`);
    })
})

let string = 'sajjad'

console.log(string == true);