const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");
const showCards = document.querySelector('#showCards');
const load = document.querySelector('#load');

burger.addEventListener("click" , () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

load.addEventListener('click' , () => {
    if(showCards.classList.contains('hidden')){
        showCards.classList.remove('hidden');
        load.innerHTML = "Load Less";
    } else {
        showCards.classList.add('hidden');
        load.innerHTML = "Load More";
    }
});