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
