const btn = document.getElementById('menu-top');

function navtoggle(){
   btn.classList.toogle('open')
   nav.classList.toggle('hidden')
   document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click',navtoggle);