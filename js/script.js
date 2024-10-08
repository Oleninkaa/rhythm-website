"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper){
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        autoHeight:true,
        loop: true,
       

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
}

/*


const viewAll = document.querySelectorAll('#top-selling .cards__extend');

let isInvisible = true; // Змінна для відстеження стану

function toggleInvisible() {
    const cards = document.querySelectorAll('.card__item'); // Звертаємося до всіх карток
    alert('d');
    if (isInvisible) {
        cards.forEach((card) => {
            card.classList.remove('invisible'); // Видаляємо клас 'invisible'
        });
    } else {
        cards.forEach((card) => {
            card.classList.add('invisible'); // Додаємо клас 'invisible'
        });
    }
    
    isInvisible = !isInvisible; // Змінюємо стан
}

viewAll.forEach(element => {
    element.addEventListener('click', toggleInvisible);
});


*/

const defaultSize = 3;
const cardsNames = ["#top-selling", "#new"];

cardsNames.forEach(cardName => {
   
    const items = document.querySelectorAll(`${cardName} .card__item`); // всі картки
   
    defaultVidibility(items); // зробити невидимими всі картки, що перевищують дефолтний розмір

    const viewElement = document.querySelector(`${cardName} .cards__extend`); // елемент "показати всі"
  
    viewElement.addEventListener("click", () => makeVisible(items)); // при кліку на "показати всі", викликаємо makeVisible
});

function defaultVidibility(cards) {
    for (let i = defaultSize; i < cards.length; i++) {
        cards[i].classList.add('invisible');
    }
}

function makeVisible(cards) {
    for (let i = defaultSize; i < cards.length; i++) {
        cards[i].classList.toggle('invisible');
    }
}




const btnOpen = document.querySelector('#btnOpen');

const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 767.98px)');
const topNavMenu = document.querySelector('.menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

const linkMenu = document.querySelectorAll('.menu__item');



btnOpen.classList.add('open__btn');


function setupTopNav(e){
    if(e.matches){
        //is mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none';
        

    }
    else{
        //is tablet/desktop
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
        closeMobileMenu();
        
    }
}

function openMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'true')
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    btnOpen.focus();
    bodyScrollLock.disableBodyScroll(body);
}

function closeMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'false')
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLock.enableBodyScroll(body);
    btnOpen.focus();


    setTimeout(() => {
        topNavMenu.style.transition='none';
    },500);
}

function defineState(){


    if(btnOpen.classList.contains('open__btn')){
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
    btnOpen.classList.toggle('open__btn');

    
}

setupTopNav(media);

btnOpen.addEventListener('click', defineState);


media.addEventListener('change', function(e){
    setupTopNav(e);
});


linkMenu.forEach(link => {
    link.addEventListener('click', function(){
        closeMobileMenu();
        btnOpen.classList.add('open__btn');
    });
    
});






const animateText = document.querySelectorAll('.group__title');

animateText.forEach(element => {
    element.classList.add('animate');
});

const animateBtn = document.querySelector('.hero__btn');
animateBtn.classList.add('animate');

const animateReason = document.querySelectorAll('.why-try__reason');
animateReason.forEach(element => {
    element.classList.add('animate');
});

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 