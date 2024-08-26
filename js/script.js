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
    console.log(cardName);
    const items = document.querySelectorAll(`${cardName} .card__item`); // всі картки
    console.log(items);
    defaultVidibility(items); // зробити невидимими всі картки, що перевищують дефолтний розмір

    const viewElement = document.querySelector(`${cardName} .cards__extend`); // елемент "показати всі"
    console.log(viewElement);
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





