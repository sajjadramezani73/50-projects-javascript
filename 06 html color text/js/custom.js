const colorInput = document.getElementById('color_input')
const colorPreview = document.getElementById('color_preview')

colorInput.addEventListener('input', (event) => {
    renderBackgroundPreview(event.target.value)
})

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b ', 'c', 'd', 'e', 'f']

let exist = true
const renderBackgroundPreview = function (text) {
    for (let i = 0; i < text.length; i++) {
        if (arr.includes(text[i])) {
            exist = true
        } else {
            exist = false
        }
    }

    if (exist && (text.length == 3 || text.length == 6)) {
        colorPreview.style.backgroundColor = `#${text}`
    } else {
        colorPreview.style.backgroundColor = '#000'
    }

    if (text.length == 0) {
        colorPreview.style.backgroundColor = '#fff'
    }
}