
function toggleMenu(){
  document.getElementById('menu').classList.toggle('open')
}

function toggleLang(){
  event.stopPropagation()
  document.querySelector('.lang-switcher').classList.toggle('open')
}

document.addEventListener('click', ()=>{
  document.querySelector('.lang-switcher').classList.remove('open')
})

function toggleMenu() {
            document.getElementById('menu').classList.toggle('open')
        }

