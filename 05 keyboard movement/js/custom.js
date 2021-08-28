const square = document.getElementById('square')

let style = getComputedStyle(square)

let movement = {
    move: 10,
    move10: 50,
    x: parseInt(style.getPropertyValue('left')),
    y: parseInt(style.getPropertyValue('top')),
}

window.addEventListener('keyup', (event) => {
    if (event.keyCode === 37) {
        if (event.shiftKey) {
            movement.x = movement.x - movement.move10
            square.style.left = movement.x + 'px'
        } else {
            movement.x = movement.x - movement.move
            square.style.left = movement.x + 'px'
        }
    }
    if (event.keyCode === 38) {
        if (event.shiftKey) {
            movement.y = movement.y - movement.move10
            square.style.top = movement.y + 'px'
        } else {
            movement.y = movement.y - movement.move
            square.style.top = movement.y + 'px'
        }
    }
    if (event.keyCode === 39) {
        if (event.shiftKey) {
            movement.x = movement.x + movement.move10
            square.style.left = movement.x + 'px'
        } else {
            movement.x = movement.x + movement.move
            square.style.left = movement.x + 'px'
        }
    }
    if (event.keyCode === 40) {
        if (event.shiftKey) {
            movement.y = movement.y + movement.move10
            square.style.top = movement.y + 'px'
        } else {
            movement.y = movement.y + movement.move
            square.style.top = movement.y + 'px'
        }
    }
})