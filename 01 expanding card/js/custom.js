window.addEventListener('load', () => {
    const gallery = document.querySelector('.gallery')

    const data = [
        {
            id: 1, src: "./images/01(1).jpg",
        },
        {
            id: 2, src: "./images/01(2).jpg",
        },
        {
            id: 3, src: "./images/01(3).jpg",
        },
        {
            id: 4, src: "./images/01(4).jpg",
        },
        {
            id: 5, src: "./images/01(5).jpg",
        },
    ]

    const createEl = (item) => {
        console.log(item);
        let div = document.createElement('div')
        div.classList.add('div-pic')
        let img = document.createElement('img')
        img.setAttribute('src', `${item.src}`)
        div.appendChild(img)
        gallery.appendChild(div)
    }

    data.forEach((item) => {
        createEl(item)
    })

    const addClass = () => {
        const divPic = document.querySelectorAll('.gallery .div-pic')
        divPic[0].classList.add('active')

        divPic.forEach((item) => {
            item.addEventListener('click', () => {
                divPic.forEach((item) => { item.classList.remove('active') })
                item.classList.add('active')
            })
        })
    }
    addClass()




})