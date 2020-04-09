/*
//Create a function to select elements

const selectElement = (element) => document.querySelector(element);

//call the select element function to get values into variables

const header = selectElement('header');
const main = selectElement('main');
//add clikc events to trigger the active state
selectElement('.menu').addEventListener('click', () => {
    header.classList.toggle('active');
    selectElement('main').classList.toggle('active');
});

//when clicking outside the nav close it
window.onclick = (event) => {
    if (event.target.matches('.active')) {
        console.log(event.target);
        if (header.classList.contains('active')) {
            header.classList.remove('active');

        }
    }
};
//

function closeMenu() {
    const header = selectElement('header'); if (header.classList.contains('active')) {
        header.classList.remove('active');

    };
}


*/
//var isActive = false;
const selectElement = (element) => document.querySelector(element);
const header = selectElement('header');
const mainc = selectElement('main');
const menu = selectElement('.menu');
menu.addEventListener('click', () => {
    header.classList.toggle('active');

});
mainc.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
    }
});
window.onclick = (event) => {
    if (event.target.matches('.active')) {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
        }

    }
};