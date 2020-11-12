// darkTheme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
} else {
  if (userHasDarkTheme) document.body.classList.add(darkTheme)
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
})
// hamburger nav
const mainMenu = document.getElementById('nav_links')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
function show(){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}
function close(){
  mainMenu.style.top = '-130%'
}
openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)
mainMenu.addEventListener('click',close)