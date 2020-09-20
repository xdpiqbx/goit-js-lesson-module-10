// https://youtu.be/N6DyJauZCmc?t=1918
//import "../sass/templating.scss";
//import menu from "./menu.json";
//const technologies = ['HTML', 'CSS', 'JS', 'React'];
//const galleryRef = document.querySelector('.js-gallery');

// //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* 
// const element = "<li><a href='#'>Hello</a></li>"
// galleryRef.innerHTML = element;

// //с innerHTML так сделать нельзя!
// //на каждой итерации будет перезаписано содержимое galleryRef
// //и получу только последний елемент
// for (let tech of technologies){
//     galleryRef.innerHTML = `<li><a href='#'>${tech}</a></li>`
// }
// //-=-=-=-=-=-=-=-=-=-=-=-=-
// // а через insertAdjacentHTML можно
// for (let tech of technologies){ // так не круто =(
//     galleryRef.insertAdjacentHTML('beforeend', `<li><a href='#'>${tech}</a></li>`)
// }

// //так круче =)
// const markup = technologies.map(tech => `<li><a href='#'>${tech}</a></li>`).join("");
// galleryRef.insertAdjacentHTML('beforeend', markup)

// //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*  Вариант выше описыват возможность БЕЗ шаблонизации


///https://youtu.be/N6DyJauZCmc?t=2431 // только начинает рассказывать про Handlebars

// Handlebars
// если не пользоватся Webpack
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha512-zT3zHcFYbQwjHdKjCu6OMmETx8fJA9S7E6W7kBeFxultf75OPTYUJigEKX58qgyQMi1m1EgenfjMXlRZG8BXaw==" crossorigin="anonymous"></script> */ }
// Если через cdn подключить свою библиотеку то она автоматом в window запишет свою переменную

// Handlebars для Webpack
//https://youtu.be/N6DyJauZCmc?t=3170

// создать папочку templates
// там файлик gallery-items.hbs
// и свой шаблон в gallery-items.hbs
/*
    {{#each items}}
        <li><a href="#">{{this}}</a></li>
    {{/each}}
*/

// теперь просто импортирую файл с шаблоном

//import itemsTemplate from '../templates/gallery-items.hbs'
// itemsTemplate // и получаю готовый шаблон (функция без Handlebars.compile, он сработал из лоадера)

// для сравнения без Webpack
// const html = document.querySelector('#list-item').innerHTML.trim() // из <template id="list-item">... в который потом тулил <li>...
// const template = Handlebars.compile(html) // Handlebars.compile - возвращает функцию шаблон

//const marcup = itemsTemplate({ items: ['HTML', 'CSS', 'JS', 'React'] })
//const marcup = itemsTemplate(['HTML', 'CSS', 'JS', 'React']) // чтоб это отработало в .hbs туда надо передать this
//galleryRef.insertAdjacentHTML('beforeend', marcup)


//https://youtu.be/N6DyJauZCmc?t=3465