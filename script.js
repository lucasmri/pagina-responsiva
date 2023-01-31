const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menu-icon-open')
const menuClose = document.querySelector('.menu-icon-close')

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex'
    // document.querySelector("*").style.overflowY = 'hidden'
})

menuClose.addEventListener('click', () => {
    menu.style.display = 'none'
    // document.querySelector("*").style.overflowY = 'scroll'
    menu.removeAttribute("style")
})