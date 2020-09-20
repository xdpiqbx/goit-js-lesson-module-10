// https://youtu.be/N6DyJauZCmc?t=1918
import "../sass/templating.scss";
//import menu from "./menu.json";

const technologies = ['HTML', 'CSS', 'JS', 'React'];
const galleryRef = document.querySelector('.js-gallery');

//-=-=-=-=-=-=-=-=-=-=-=-=-
const element = "<li><a href='#'>Hello</a></li>"
galleryRef.innerHTML = element;

//с innerHTML так сделать нельзя!
//на каждой итерации будет перезаписано содержимое galleryRef
//и получу только последний елемент
for (let tech of technologies){
    galleryRef.innerHTML = `<li><a href='#'>${tech}</a></li>`
}
//-=-=-=-=-=-=-=-=-=-=-=-=-
// а через insertAdjacentHTML можно
for (let tech of technologies){ // так не круто =(
    galleryRef.insertAdjacentHTML('beforeend', `<li><a href='#'>${tech}</a></li>`)
}

//так круче =)
const markup = technologies.map(tech => `<li><a href='#'>${tech}</a></li>`).join("");
galleryRef.insertAdjacentHTML('beforeend', markup)

///https://youtu.be/N6DyJauZCmc?t=2431

// Handlebars
// если не пользоватся Webpack
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha512-zT3zHcFYbQwjHdKjCu6OMmETx8fJA9S7E6W7kBeFxultf75OPTYUJigEKX58qgyQMi1m1EgenfjMXlRZG8BXaw==" crossorigin="anonymous"></script> */}
// Если через cdn подключить свою библиотеку то она автоматом в window запишет свою переменную