let burger=document.querySelector('.burger')
let  navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click', function(){
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})
