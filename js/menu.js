const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(hamburger)

/* Despliega el menu cuando presionas el icono */
hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
}
)

/* Mantiene el menu desplegado hasta que se de clic */
window.addEventListener('click', e=>{
    if (menu.classList.contains('spread') && 
        e.target != menu &&
        e.target != hamburger){
        menu.classList.toggle("spread")
    }
})