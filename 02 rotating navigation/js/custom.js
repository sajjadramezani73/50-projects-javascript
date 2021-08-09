const wrapper = document.querySelector('.wrapper')
const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')

btnOpen.addEventListener('click', function () {
    wrapper.classList.add('show')
})

btnClose.addEventListener('click', function () {
    wrapper.classList.remove('show')
})