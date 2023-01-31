const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menu-icon-open')
const menuClose = document.querySelector('.menu-icon-close')

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex'
})

menuClose.addEventListener('click', () => {
    menu.style.display = 'none'
    menu.removeAttribute("style")
})