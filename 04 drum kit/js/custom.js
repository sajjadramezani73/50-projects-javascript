const btns = document.querySelectorAll('.btn')

const createAudioElement = (name) => {
    let src = `./sounds/${name}.wav`
    let audioEl = new Audio(src);
    audioEl.play()
}

const addClass = (code) => {
    btns.forEach(item => {
        const el = item.classList.contains(`btn-${code}`)
        if (el) {
            item.classList.add('show')
            setTimeout(() => {
                item.classList.remove('show')
            }, 100);
        }
    });
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyA') {
        createAudioElement('clap')
        addClass(event.code)
    }
    if (event.code === 'KeyS') {
        createAudioElement('hihat')
        addClass(event.code)
    }
    if (event.code === 'KeyD') {
        createAudioElement('kick')
        addClass(event.code)
    }
    if (event.code === 'KeyF') {
        createAudioElement('openhat')
        addClass(event.code)
    }
    if (event.code === 'KeyG') {
        createAudioElement('boom')
        addClass(event.code)
    }
    if (event.code === 'KeyH') {
        createAudioElement('ride')
        addClass(event.code)
    }
    if (event.code === 'KeyJ') {
        createAudioElement('snare')
        addClass(event.code)
    }
    if (event.code === 'KeyK') {
        createAudioElement('tom')
        addClass(event.code)
    }
    if (event.code === 'KeyL') {
        createAudioElement('tink')
        addClass(event.code)
    }
})