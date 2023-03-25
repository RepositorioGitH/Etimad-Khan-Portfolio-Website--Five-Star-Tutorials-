// ***** Código JavaScript para inicio de la sección Inicio *****

// Acceder a los elementos requeridos y almacenarlos en variables

var menu_btn = document.querySelector('#primaryMenuBtn');
var menu = document.querySelector('.primaryMenu ul');
var menuItems = document.querySelectorAll('.primaryMenu ul li a');

// Agregar un evento de clic al botón de hamburguesa

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('active');
    menu.classList.toggle('active');
});

// Recorre todos los elementos del menú y agrega un evento de click

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', menuFunction);
}
function menuFunction() {
    menu.classList.remove('active');
    menu_btn.classList.remove('active');
}
// ***** El código JavaScript para la sección de inicio finaliza *****


//  *****   JavaScript Code For Portfolio Section Starts   *****

// Access the necessary html elements and store it variables
var allFilters = document.querySelectorAll('.portfolioBtns li.btn');
var allCards = document.querySelectorAll('.portfolioGallery .card');

// Add a click event to the buttons
for (var i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener('click', filterFunction);
}
// Define the function
function filterFunction() {
    // Access the active button
    var activeTab = document.querySelector('.portfolioBtns .active');
    // Remove the active class from the button
    activeTab.classList.remove('active');
    // Add active class to the button which is clicked
    this.classList.add('active');

    // Get the value of the 'data-filter' attribute of the clicked button
    var filter = this.getAttribute('data-filter');

    // Check if any other button is clicked except the 'all' (All Work) button
    // if condition is true,
    // then hide all other cards, except those related to the clicked button
    if (filter != 'all') {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('hide');
            var currentItem = allCards[i].getAttribute('data-item');
            if (currentItem == filter) {
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }
    // otherwise display all the cards
    else {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}

// Add a click event to all the cards
for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', popupFunction);
}
// if a card is clicked then display the bopup box and show the related image
function popupFunction() {
    document.querySelector('.portfolioPopupBox').
        style.display = 'block';
    document.querySelector('.portfolioPopupBox img').
        src = this.querySelector('.imgBox img').getAttribute('src');
}

// When you click the cancel button, then hide the popup box
document.querySelector('.portfolioPopupBox span').
    addEventListener('click', function () {
        document.querySelector('.portfolioPopupBox').style.display = 'none';
    });

//  *****   JavaScript Code For Portfolio Section Ends   *****

// ***** Código JavaScript para la sección Testimonios Comienza *****

// Acceder y almacenar las tarjetas testimoniales

// Accede y almacena los botones siguiente y anterior


// Código para el siguiente botón


// Código para el botón anterior

// Auto deslizante

// Agregar y eliminar la clase activa de los indicadores

// Detener el deslizamiento automático cuando el mouse está sobre los botones


// Reanudar el deslizamiento automático cuando el mouse está fuera

// Agregar evento de clic a los indicadores

// ***** El código JavaScript para la sección de testimonios finaliza *****


// ***** Código JavaScript para el inicio de la barra de menú fija *****

var menuBar = document.querySelector('.homeSection .primaryMenu');

window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
    menuBar.classList.toggle('stickyMenuBar', window.scrollY >=250);
}
// ***** Código JavaScript para extremos fijos de la barra de menú *****


/**codigo para aparecer y desaparecer elementos */
window.addEventListener('scroll', function () {

    

    function fade(direccion) {
        var imagen = this.document.querySelectorAll('.fade_'+ direccion);

        for (var i = 0; i < imagen.length; i++) {

            var altura = window.innerHeight / 1.3;

            var distancia = imagen[i].getBoundingClientRect().top;
            console.log(altura)
            console.log(distancia)

            imagen[i].classList.add('transform_'+ direccion)

            if (distancia <= altura) {
                imagen[i].classList.add('aparece')
            }
            else {
                imagen[i].classList.remove('aparece')
            }

        }
   }
    fade('left');
    fade('up');
    fade('down');
    fade('right');
    
});