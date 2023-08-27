const MENU_BUTTON = document.getElementById('menu-btn');
const NAVBAR_OPEN = document.getElementById('list-nav-open');

// 3ra Seccion #cotizar
const BTN_SUBMIT = document.getElementById('btn-cotizacion');

var validacion = false;
MENU_BUTTON.addEventListener(('click'), () => {
    if(validacion == false) {
        NAVBAR_OPEN.style.removeProperty('display');
        NAVBAR_OPEN.style.display = 'block';
        validacion = true;
    }else {
        NAVBAR_OPEN.style.removeProperty('display');
        NAVBAR_OPEN.style.display = 'none';
        validacion = false;
    }
})

function submitCotizacion() {
    BTN_SUBMIT.innerHTML = ''
}